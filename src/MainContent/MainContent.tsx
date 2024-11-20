import { Form } from '../Form';
import { useAppContext } from '../AppContext';
import { Format } from '../Format';
import { FetchPosts } from '../FetchPosts';

import { StyledBox, StyledContainer } from './styles';

export const MainContent = () => {
  const { layoutType, task, formatType } = useAppContext();

  return (
    <StyledBox>
      <StyledContainer>
        {task === 'form' && <Form type={layoutType} />}
        {task === 'format' && <Format format={formatType} />}
        {task === 'fetch' && <FetchPosts />}
      </StyledContainer>
    </StyledBox>
  );
};
