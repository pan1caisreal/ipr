import { styled } from '../../styles';

export const FormContainer = styled.div`
  margin: 0 auto ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(7)};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const FieldContainer = styled.div`
  display: inline-block;
  width: calc(33.33% - 32px);
  margin: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 1200px) {
    width: calc(50% - 32px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
