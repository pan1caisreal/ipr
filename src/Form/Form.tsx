import { FlexboxForm } from './FlexboxForm';
import { GridForm } from './GridForm';
import { MediaQueriesForm } from './MediaQueriesForm';

type FormProps = {
  type: 'flexbox' | 'grid' | 'mediaQueries';
};

export const Form = ({ type }: FormProps) => {
  const renderForm = () => {
    if (type === 'flexbox') {
      return <FlexboxForm />;
    }

    if (type === 'grid') {
      return <GridForm />;
    }

    return <MediaQueriesForm />;
  };

  return <>{renderForm()}</>;
};
