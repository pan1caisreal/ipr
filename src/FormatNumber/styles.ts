import { styled } from '../styles';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  max-width: 300px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
