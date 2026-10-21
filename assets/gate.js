(function () {
  "use strict";
  var STORAGE_KEY = "iatools-passcode";
  var GATE = window.__GATE_DATA__;

  function b64ToBuf(b64) {
    var bin = atob(b64);
    var buf = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return buf.buffer;
  }

  function activateScripts(root) {
    var scripts = root.querySelectorAll("script");
    scripts.forEach(function (old) {
      var s = document.createElement("script");
      for (var i = 0; i < old.attributes.length; i++) {
        var attr = old.attributes[i];
        s.setAttribute(attr.name, attr.value);
      }
      s.textContent = old.textContent;
      old.replaceWith(s);
    });
  }

  function deriveKey(passcode) {
    var enc = new TextEncoder();
    return crypto.subtle
      .importKey("raw", enc.encode(passcode), { name: "PBKDF2" }, false, ["deriveKey"])
      .then(function (keyMaterial) {
        return crypto.subtle.deriveKey(
          { name: "PBKDF2", salt: b64ToBuf(GATE.salt), iterations: GATE.iterations, hash: "SHA-256" },
          keyMaterial,
          { name: "AES-GCM", length: 256 },
          false,
          ["decrypt"]
        );
      });
  }

  function tryUnlock(passcode) {
    return deriveKey(passcode)
      .then(function (key) {
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: b64ToBuf(GATE.iv) }, key, b64ToBuf(GATE.data));
      })
      .then(function (plainBuf) {
        return new TextDecoder().decode(plainBuf);
      })
      .catch(function () {
        return null;
      });
  }

  function renderLock(root, onSubmit, state) {
    root.innerHTML =
      '<div class="gate-overlay"><div class="gate-card">' +
      '<div class="gate-kicker">Acceso restringido</div>' +
      '<h1 class="gate-title">' + (GATE.title || "IA Generativa en Educación") + "</h1>" +
      '<p class="gate-sub">Introduce el código de acceso facilitado por el docente.</p>' +
      '<form id="gate-form"><input id="gate-input" type="password" autocomplete="off" placeholder="Código de acceso" autofocus>' +
      '<button class="btn" type="submit">Entrar</button></form>' +
      (state === "error" ? '<p class="gate-error">Código incorrecto. Inténtalo de nuevo.</p>' : "") +
      (state === "loading" ? '<p class="gate-loading">Comprobando…</p>' : "") +
      "</div></div>";
    var form = document.getElementById("gate-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var val = document.getElementById("gate-input").value.trim();
        if (val) onSubmit(val);
      });
    }
  }

  function unlockAndRender(root, passcode) {
    return tryUnlock(passcode).then(function (html) {
      if (html === null) return false;
      try {
        localStorage.setItem(STORAGE_KEY, passcode);
      } catch (e) {}
      root.innerHTML = html;
      activateScripts(root);
      return true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("gate-root");
    if (!root || !GATE) return;

    function attempt(passcode) {
      renderLock(root, attempt, "loading");
      unlockAndRender(root, passcode).then(function (ok) {
        if (!ok) renderLock(root, attempt, "error");
      });
    }

    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    if (saved) {
      unlockAndRender(root, saved).then(function (ok) {
        if (!ok) renderLock(root, attempt, null);
      });
    } else {
      renderLock(root, attempt, null);
    }
  });
})();
