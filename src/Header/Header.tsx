import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  type SelectChangeEvent,
} from '@mui/material';

import { useAppContext } from '../AppContext';
import { type TaskType } from '../types';

import { NavButton, StyledSelect, StyledTypography, Wrapper } from './styles';

export const Header = () => {
  const {
    setLayoutType,
    layoutType,
    task,
    setTask,
    formatType,
    setFormatType,
  } = useAppContext();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setTask(event.target.value as TaskType);
  };

  return (
    <Wrapper>
      <StyledTypography variant="h6">ИПР</StyledTypography>
      {task === 'form' && (
        <Box>
          <NavButton
            $isActive={layoutType === 'flexbox'}
            onClick={() => setLayoutType('flexbox')}
          >
            Flexbox
          </NavButton>
          <NavButton
            $isActive={layoutType === 'grid'}
            onClick={() => setLayoutType('grid')}
          >
            Grid
          </NavButton>
          <NavButton
            $isActive={layoutType === 'mediaQueries'}
            onClick={() => setLayoutType('mediaQueries')}
          >
            Media Queries
          </NavButton>
        </Box>
      )}
      {task === 'format' && (
        <Box>
          <NavButton
            $isActive={formatType === 'localeString'}
            onClick={() => setFormatType('localeString')}
          >
            LocaleString
          </NavButton>
          <NavButton
            $isActive={formatType === 'Intl'}
            onClick={() => setFormatType('Intl')}
          >
            Intl
          </NavButton>
        </Box>
      )}
      <FormControl variant="standard">
        <InputLabel id="select-label">Task</InputLabel>
        <StyledSelect
          value={task}
          onChange={handleChange}
          label="Task"
          labelId="select-label"
        >
          <MenuItem value="form">Form</MenuItem>
          <MenuItem value="format">format</MenuItem>
          <MenuItem value="fetch">fetch</MenuItem>
        </StyledSelect>
      </FormControl>
    </Wrapper>
  );
};
