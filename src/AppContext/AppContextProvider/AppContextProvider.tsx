import { type ReactNode, useState } from 'react';

import { AppContext } from '../AppContext';
import { type FormatType, type LayoutType, type TaskType } from '../../types';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [layoutType, setLayoutType] = useState<LayoutType>('flexbox');
  const [formatType, setFormatType] = useState<FormatType>('localeString');
  const [task, setTask] = useState<TaskType>('form');

  return (
    <AppContext.Provider
      value={{
        formatType,
        setFormatType,
        setTask,
        task,
        layoutType,
        setLayoutType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
