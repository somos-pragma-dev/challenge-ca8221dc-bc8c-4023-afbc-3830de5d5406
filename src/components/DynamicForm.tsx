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