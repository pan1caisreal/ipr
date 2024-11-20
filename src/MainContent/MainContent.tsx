import { Form } from '../Form';
import { useAppContext } from '../AppContext';
import { FormatNumber } from '../FormatNumber';
import { FetchPosts } from '../FetchPosts';

import { StyledBox, StyledContainer } from './styles';

export const MainContent = () => {
  const { layoutType, task, formatType } = useAppContext();

  return (
    <StyledBox>
      <StyledContainer>
        {task === 'form' && <Form type={layoutType} />}
        {task === 'formatNumber' && <FormatNumber format={formatType} />}
        {task === 'fetch' && <FetchPosts />}
      </StyledContainer>
    </StyledBox>
  );
};
