import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

import { type FormatType } from '../types';

import { Wrapper } from './styles';

type FormatNumberProps = {
  format: FormatType;
};

export const FormatNumber = ({ format }: FormatNumberProps) => {
  const [numberInput, setNumberInput] = useState('');
  const [outputNumber, setOutputNumber] = useState<string | null>(null);
  const handleFormat = () => {
    try {
      const parsedNumber = Number(numberInput);
      const formatted =
        format === 'Intl'
          ? new Intl.NumberFormat('en-EN').format(parsedNumber)
          : parsedNumber.toLocaleString('ru-RU');

      setOutputNumber(formatted);
    } catch (error) {
      console.error('Ошибка форматирования:', error);
      setOutputNumber('Ошибка форматирования!');
    }
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <TextField
        label="Введите число"
        variant="outlined"
        value={numberInput}
        onChange={(e) => setNumberInput(e.target.value)}
        fullWidth
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleFormat}>
          Форматировать
        </Button>
      </Stack>
      {outputNumber && <Typography>Результат: {outputNumber}</Typography>}
    </Wrapper>
  );
};
