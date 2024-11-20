import { Button, TextField } from '@mui/material';

import { ButtonWrapper, FieldContainer, GridContainer } from './styles';

export const GridForm = () => {
  return (
    <>
      <GridContainer>
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
      </GridContainer>
      <ButtonWrapper>
        <Button variant="contained">Сбросить форму</Button>
        <Button variant="contained">Отправить данные</Button>
      </ButtonWrapper>
    </>
  );
};
