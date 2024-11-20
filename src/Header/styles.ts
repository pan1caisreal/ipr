import { AppBar, Button, Select, Typography } from '@mui/material';

import { styled } from '../styles';

export const Wrapper = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

export const StyledTypography = styled(Typography)`
  font-weight: bold;
`;

export const NavButton = styled(Button, {
  shouldForwardProp: (prop) => !['$isActive'].includes(prop),
})<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.palette.primary.main : theme.palette.text.secondary};
  transition: ${({ theme }) =>
    theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledSelect = styled(Select)`
  min-width: 200px;
`;
