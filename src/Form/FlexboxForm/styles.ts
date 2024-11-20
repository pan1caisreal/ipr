import { styled } from '../../styles/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(4)};
  margin: 0 auto ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(7)};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const FieldContainer = styled.div`
  flex: 1 1 300px;
  max-width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
