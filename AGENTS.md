# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Formularios dinamicos con React Hooks y validacion custom

### Reto
- Tema: React Hooks
- Seniority: junior-l2
- Tipo: practical
- Título: Implementación de Formularios Dinámicos con Validación Custom en React
- Tiempo estimado: 4 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición del Modelo de Datos — objetivo: Definir las estructuras de datos necesarias para representar los campos del formulario y sus validaciones. — entregable (NO resolver): Modelo de datos que representa los campos del formulario y sus validaciones.
- Fase 2: Implementación del Formulario — objetivo: Implementar el formulario dinámico utilizando React Hooks y aplicar las validaciones definidas. — entregable (NO resolver): Componente de formulario dinámico que renderiza los campos y aplica las validaciones custom.
- Fase 3: Integración con el Sistema de Gestión de Clientes — objetivo: Integrar el formulario con el sistema de gestión de clientes para crear un perfil de usuario. — entregable (NO resolver): Función que envía los datos del formulario al sistema de gestión de clientes y maneja los errores.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

import axios from 'axios';

// === ARCHIVO: src/models/formModel.ts ===
interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date';
  validations: Array<(value: any) => string | null>;
}

interface FormModel {
  fields: FormField[];
}

const formModel: FormModel = {
  fields: [
    { name: 'firstName', label: 'Nombre', type: 'text', validations: [(value) => (value.length < 2? 'El nombre debe tener al menos 2 caracteres' : null)] },
    { name: 'lastName', label: 'Apellido', type: 'text', validations: [(value) => (value.length < 2? 'El apellido debe tener al menos 2 caracteres' : null)] },
    { name: 'birthDate', label: 'Fecha de Nacimiento', type: 'date', validations: [(value) => (new Date(value).getFullYear() < 1900? 'Fecha de nacimiento inválida' : null)] },
    { name: 'phoneNumber', label: 'Número de Teléfono', type: 'number', validations: [(value) => (value.toString().length!== 10? 'El número de teléfono debe tener 10 dígitos' : null)] },
    { name: 'email', label: 'Email', type: 'text', validations: [(value) => (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)? 'Email inválido' : null)] },
  ],
};

export default formModel;

// === ARCHIVO: src/utils/validations.ts ===
export const required = (value: any) => (value? null : 'Este campo es obligatorio');

// === ARCHIVO: src/hooks/useForm.ts ===
import { useState, useEffect } from 'react';
import { FormModel } from '../models/formModel';

interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string | null;
}

export const useForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formModel = FormModel;

  useEffect(() => {
    if (isSubmitting) {
      const errors: FormErrors = {};
      formModel.fields.forEach((field) => {
        const value = formValues[field.name];
        field.validations.forEach((validation) => {
          const error = validation(value);
          if (error) {
            errors[field.name] = error;
          }
        });
      });
      setFormErrors(errors);
      setIsSubmitting(false);
    }
  }, [formValues, isSubmitting]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  return { formValues, formErrors, handleInputChange, handleSubmit };
};

// === ARCHIVO: src/services/clientService.ts ===
import axios from 'axios';

export const sendFormData = async (data: any) => {
  try {
    const response = await axios.post('/api/clients', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data || 'Error de red');
    }
    throw error;
  }
};

// === ARCHIVO: src/components/DynamicForm.tsx ===
import React from 'react';
import { FormModel } from '../models/formModel';
import { useForm } from '../hooks/useForm';
import { sendFormData } from '../services/clientService';

const DynamicForm: React.FC = () => {
  const { formValues, formErrors, handleInputChange, handleSubmit } = useForm();
  const [submissionStatus, setSubmissionStatus] = React.useState<'success' | 'error' | null>(null);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await sendFormData(formValues);
      setSubmissionStatus('success');
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {FormModel.fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={handleInputChange}
          />
          {formErrors[field.name] && <span>{formErrors[field.name]}</span>}
        </div>
      ))}
      <button type="submit">Enviar</button>
      {submissionStatus === 'success' && <p>Formulario enviado con éxito</p>}
      {submissionStatus === 'error' && <p>Error al enviar el formulario</p>}
    </form>
  );
};

export default DynamicForm;
```
