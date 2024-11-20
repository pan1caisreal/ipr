import { Button, TextField } from '@mui/material';

import { useForm } from '../hooks';

import { ButtonWrapper, FieldContainer, Wrapper } from './styles';

export const FlexboxForm = () => {
  const { formState, submitForm, handleChange, resetForm, loadFromStorage } =
    useForm();

  return (
    <>
      <Wrapper>
        <FieldContainer>
          <TextField
            label="Имя"
            required
            fullWidth
            value={formState.firstName}
            onChange={(event) => handleChange('firstName', event)}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Фамилия"
            required
            fullWidth
            value={formState.lastName}
            onChange={(event) => handleChange('lastName', event)}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={formState.email}
            onChange={(event) => handleChange('email', event)}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Телефон"
            type="tel"
            required
            fullWidth
            value={formState.phone}
            onChange={(event) => handleChange('phone', event)}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Пароль"
            type="password"
            required
            fullWidth
            value={formState.password}
            onChange={(event) => handleChange('password', event)}
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Подтверждение пароля"
            type="password"
            required
            fullWidth
            value={formState.confirmPassword}
            onChange={(event) => handleChange('confirmPassword', event)}
          />
        </FieldContainer>
      </Wrapper>
      <ButtonWrapper>
        <Button variant="contained" onClick={resetForm}>
          Сбросить форму
        </Button>
        <Button variant="contained" onClick={loadFromStorage}>
          Редактировать
        </Button>
        <Button variant="contained" onClick={submitForm}>
          Отправить данные
        </Button>
      </ButtonWrapper>
    </>
  );
};
