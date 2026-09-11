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