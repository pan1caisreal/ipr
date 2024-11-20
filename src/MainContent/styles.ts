import { Box, Container } from '@mui/material';

import { styled } from '../styles';

export const StyledBox = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  padding: ${({ theme }) => theme.spacing(4, 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin-top: ${({ theme }) => theme.spacing(9)};
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
