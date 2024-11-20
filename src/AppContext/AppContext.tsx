import { createContext } from 'react';

import { type FormatType, type LayoutType, type TaskType } from '../types';

type AppContextProps = {
  layoutType: LayoutType;
  setLayoutType: (layoutType: LayoutType) => void;
  task: TaskType;
  setTask: (task: TaskType) => void;
  formatType: FormatType;
  setFormatType: (format: FormatType) => void;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);
