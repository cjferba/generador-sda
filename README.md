# Generador de Situaciones de Aprendizaje

Herramienta web para docentes de **Educación Infantil y Primaria**. Rellenas un formulario guiado (identificación, contexto y atención a la diversidad, justificación, concreción curricular, secuenciación en seis fases y evaluación) y obtienes un **prompt de Nivel 3** listo para pegar en ChatGPT, Gemini, Claude o cualquier otro asistente de IA.

**Usarla:** https://cjferba.github.io/generador-sda/

## Cómo funciona

- Es una sola página HTML, sin servidor ni dependencias. **No usa IA propia ni envía datos**: solo monta el texto del prompt en tu navegador.
- El formulario y tu **banco curricular** se guardan en el almacenamiento local del navegador. Puedes exportarlos como `.json` y cargarlos más tarde.
- En el banco curricular pegas los textos oficiales de tu comunidad (competencias específicas, criterios de evaluación y saberes básicos, una línea por elemento con el formato `CÓDIGO | descripción`). Así la IA usa los elementos reales y **no se los inventa**.
- Los botones de ChatGPT y Claude abren el asistente con el prompt en la dirección web; Gemini se abre vacío y el prompt queda copiado para pegarlo.

## Ejemplo

`ejemplos/banco-curricular-5-primaria-CMN.json`: banco curricular de **5.º de Primaria, Conocimiento del Medio Natural, Social y Cultural**, con elementos del Anexo II de la Orden de 30 de mayo de 2023 (Andalucía). Para probarlo, elige ese curso y área, cambia el paso 4 a «Seleccionar de mi banco curricular» y usa «Editar banco curricular» → «Importar banco».

## Privacidad

El prompt viaja a la IA que elijas. No escribas nombres ni datos que identifiquen al alumnado: describe el grupo y sus necesidades de forma generalizada («Alumno A», «un grupo heterogéneo de 24 alumnos…»).

## Revisa siempre el resultado

La IA puede equivocarse en códigos, criterios y normativa. Comprueba la propuesta con el BOE/BOJA vigente antes de usarla.

## Créditos

Material de la microcredencial *Competencias para el futuro docente: Séneca, Herramientas de IA y Situaciones de Aprendizaje* (Universidad de Granada, 26/MI/173), Módulo II «IA Generativa en Educación» y Módulo III «Situaciones de Aprendizaje». Autor: Dr. Carlos Fernández Basso.

Basada en el generador de Situaciones de Aprendizaje de la demo *danicruz.22web.org*, adaptada al diseño del módulo.
