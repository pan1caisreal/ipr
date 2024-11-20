import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

import { type FormatType } from '../types';

import { Wrapper } from './styles';

type FormatNumberProps = {
  format: FormatType;
};

export const Format = ({ format }: FormatNumberProps) => {
  const [numberInput, setNumberInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [outputDate, setOutputDate] = useState<string | null>(null);
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

  const handleFormatDate = () => {
    try {
      const parsedDate = new Date(dateInput);

      const formattedDate =
        format === 'Intl'
          ? new Intl.DateTimeFormat('en-EN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(parsedDate)
          : parsedDate.toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

      setOutputDate(formattedDate);
    } catch (error) {
      console.error('Ошибка форматирования даты:', error);
      setOutputDate('Ошибка форматирования даты!');
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
      <TextField
        variant="outlined"
        type="date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        fullWidth
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleFormat}>
          Форматировать число
        </Button>
        <Button variant="contained" onClick={handleFormatDate}>
          Форматировать дату
        </Button>
      </Stack>
      {outputNumber && <Typography>Результат: {outputNumber}</Typography>}
      {outputDate && <Typography>Дата: {outputDate}</Typography>}
    </Wrapper>
  );
};
