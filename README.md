# Implementación de Formularios Dinámicos con Validación Custom en React

En el contexto de una aplicación de banca digital, necesitas implementar un formulario dinámico que permita a los usuarios registrar sus datos personales. El formulario debe manejar diferentes tipos de campos (texto, número, fecha) y aplicar validaciones custom basadas en reglas de negocio específicas del dominio de banca. Los datos del formulario serán utilizados para crear un perfil de usuario en el sistema de gestión de clientes.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del Modelo de Datos

**Objetivo:** Definir las estructuras de datos necesarias para representar los campos del formulario y sus validaciones.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica los campos requeridos para el formulario (nombre, apellido, fecha de nacimiento, número de teléfono, email).
- Define las reglas de validación para cada campo (ej. formato de email, longitud mínima del nombre, rango de fechas válidas para la fecha de nacimiento).
- Crea un modelo de datos que represente los campos del formulario y sus validaciones.

**Entregable:** Modelo de datos que representa los campos del formulario y sus validaciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo representar las validaciones como funciones que reciben un valor y devuelven un resultado de validación.
- Piensa en cómo estructurar el modelo de datos para que sea flexible y extensible.

</details>

### Fase 2: Implementación del Formulario

**Objetivo:** Implementar el formulario dinámico utilizando React Hooks y aplicar las validaciones definidas.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea un componente de formulario que renderice los campos definidos en el modelo de datos.
- Utiliza React Hooks para manejar el estado y las validaciones del formulario.
- Aplica las validaciones custom definidas en la fase anterior a cada campo del formulario.

**Entregable:** Componente de formulario dinámico que renderiza los campos y aplica las validaciones custom.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo utilizar `useState` y `useEffect` para manejar el estado y las validaciones del formulario.
- Piensa en cómo integrar las funciones de validación definidas en la fase anterior con los campos del formulario.

</details>

### Fase 3: Integración con el Sistema de Gestión de Clientes

**Objetivo:** Integrar el formulario con el sistema de gestión de clientes para crear un perfil de usuario.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crea una función que envíe los datos del formulario al sistema de gestión de clientes.
- Maneja los errores de validación y los errores de red que puedan ocurrir durante el envío de los datos.
- Actualiza el estado del formulario para reflejar el éxito o el fracaso de la operación.

**Entregable:** Función que envía los datos del formulario al sistema de gestión de clientes y maneja los errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar los errores de validación y los errores de red utilizando React Hooks.
- Piensa en cómo actualizar el estado del formulario para reflejar el éxito o el fracaso de la operación.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los React Hooks y cómo se utilizan para manejar el estado y las validaciones en un formulario?
- **paraQueSirve**: ¿Para qué sirve la validación custom en un formulario y cómo se aplica en el contexto de una aplicación de banca digital?
- **comoSeUsa**: ¿Cómo se utiliza `useState` y `useEffect` para manejar el estado y las validaciones de un formulario en React?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones custom en un formulario y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la integración del formulario con el sistema de gestión de clientes y cómo se pueden manejar los errores que puedan ocurrir durante el envío de los datos?

## Criterios de Evaluacion

- Definición correcta del modelo de datos para representar los campos del formulario y sus validaciones.
- Implementación correcta del formulario dinámico utilizando React Hooks y aplicación de las validaciones custom.
- Integración correcta del formulario con el sistema de gestión de clientes y manejo de errores.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
