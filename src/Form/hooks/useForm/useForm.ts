import { type ChangeEvent, useEffect, useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const STORAGE_KEY = 'formData';

export const useForm = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      setFormState(JSON.parse(savedData));
    }
  }, []);

  const saveToLocalStorage = (newState: FormState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  };

  const handleChange = (
    field: keyof FormState,
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const newState = { ...formState, [field]: event.target.value };

    setFormState(newState);
    saveToLocalStorage(formState);
  };

  const resetForm = () => {
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
  };

  const submitForm = () => {
    alert(`Данные формы: ${JSON.stringify(formState, null, 2)}`);
    resetForm();
  };

  const loadFromStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      setFormState(JSON.parse(savedData));
    }
  };

  return {
    formState,
    submitForm,
    resetForm,
    loadFromStorage,
    handleChange,
  };
};
