# Generador de Situaciones de Aprendizaje

Herramienta web para docentes. Rellenas un formulario guiado (identificación, contexto y atención a la diversidad, justificación, concreción curricular, secuenciación en seis fases y evaluación) y obtienes un **prompt de Nivel 3** listo para pegar en ChatGPT, Gemini, Claude o cualquier otro asistente de IA.

**Usarla:** https://cjferba.github.io/generador-sda/ · se entra con el **código de acceso** de la microcredencial (lo facilita el docente).

## Etapas

Una pestaña por etapa, cada una con sus cursos, materias y normativa andaluza de partida:

| Pestaña | Cursos y opciones |
|---|---|
| Infantil | 0 a 5 años (primer y segundo ciclo) |
| Primaria | 1.º a 6.º; las áreas cambian según el curso |
| ESO | 1.º a 4.º, con optativas propias de Andalucía y ámbitos del Programa de Diversificación Curricular |
| Bachillerato | 1.º y 2.º, por modalidad; ordinario o para personas adultas (presencial, semipresencial y a distancia) |
| Personas adultas (ESA) | Nivel I y Nivel II, presencial, semipresencial o a distancia |
| FP Grado Básico | 1.º y 2.º, los 28 títulos, en grupo ordinario, grupo específico (E) o educación especial (EEE) |

La normativa de cada pestaña es un **punto de partida**: compruébala en el BOE/BOJA. En personas adultas y FP Grado Básico hay que añadir la orden andaluza vigente y, en FP, el real decreto del título.

## Cómo funciona

- Es una sola página, sin servidor. **No usa IA propia ni envía datos**: solo monta el texto del prompt en tu navegador.
- El formulario y tu **banco curricular** se guardan en el almacenamiento local del navegador. Puedes exportarlos como `.json` y cargarlos más tarde.
- En el banco curricular pegas los textos oficiales (competencias específicas, criterios de evaluación y saberes básicos; en FP, resultados de aprendizaje, criterios y contenidos), una línea por elemento con el formato `CÓDIGO | descripción`. Así la IA usa los elementos reales y **no se los inventa**.
- Los botones de ChatGPT y Claude abren el asistente con el prompt en la dirección web; Gemini se abre vacío y el prompt queda copiado para pegarlo.

## Ejemplo

`assets/m3/banco-curricular-5-primaria-CMN.json`: banco curricular de **5.º de Primaria, Conocimiento del Medio Natural, Social y Cultural**, con elementos del Anexo II de la Orden de 30 de mayo de 2023 (Andalucía). Para probarlo, en la pestaña «Primaria» elige ese curso y área, cambia el paso 4 a «Seleccionar de mi banco curricular» y usa «Editar banco curricular» → «Importar banco».

## Privacidad

El prompt viaja a la IA que elijas. No escribas nombres ni datos que identifiquen al alumnado: describe el grupo y sus necesidades de forma generalizada («Alumno A», «un grupo heterogéneo de 24 alumnos…»).

## Revisa siempre el resultado

La IA puede equivocarse en códigos, criterios y normativa. Comprueba la propuesta con la normativa vigente antes de usarla.

## Sobre este repositorio

La página se genera desde el material del curso y se publica **cifrada** (AES-GCM con una clave derivada del código de acceso): sin el código no se puede leer su contenido. No edites `index.html` a mano.

## Créditos

Material de la microcredencial *Competencias para el futuro docente: Séneca, Herramientas de IA y Situaciones de Aprendizaje* (Universidad de Granada, 26/MI/173), Módulo II «IA Generativa en Educación» y Módulo III «Situaciones de Aprendizaje». Autor: Dr. Carlos Fernández Basso.

Basada en el generador de Situaciones de Aprendizaje de la demo *danicruz.22web.org*, adaptada al diseño del módulo y ampliada a todas las etapas.
