import { Button, TextField } from '@mui/material';

import { ButtonWrapper, FieldContainer, FormContainer } from './styles';

export const MediaQueriesForm = () => {
  return (
    <>
      <FormContainer>
        <FieldContainer>
          <TextField label="Имя" required fullWidth />
        </FieldContainer>
        <FieldContainer>
          <TextField label="Фамилия" required fullWidth />
        </FieldContainer>
        <FieldContainer>
          <TextField label="Email" type="email" required fullWidth />
        </FieldContainer>
        <FieldContainer>
          <TextField label="Телефон" type="tel" required fullWidth />
        </FieldContainer>
        <FieldContainer>
          <TextField label="Пароль" type="password" required fullWidth />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Подтверждение пароля"
            type="password"
            required
            fullWidth
          />
        </FieldContainer>
      </FormContainer>
      <ButtonWrapper>
        <Button variant="contained">Сбросить форму</Button>
        <Button variant="contained">Отправить данные</Button>
      </ButtonWrapper>
    </>
  );
};
