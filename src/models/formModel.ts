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