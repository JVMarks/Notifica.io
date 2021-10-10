import React, { createContext, useState } from 'react';
import { theme } from '../../global/styles/theme';

type BackgroundColorType = {
  colorOne: string;
  colorTwo: string;
}

type PropsBackgrdContext = {
  state: BackgroundColorType;
  setState: React.Dispatch<React.SetStateAction<BackgroundColorType>>;
}

const DEFAULT_VALUE = {
  state: {
    colorOne: theme.colors.CreateAccont,
    colorTwo: theme.colors.CreateAccont,
  },
  setState: () => { },
};

const CustomThemeContext = createContext<PropsBackgrdContext>(DEFAULT_VALUE);

const CustomThemeContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CustomThemeContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  )
};

export { CustomThemeContextProvider };
export default CustomThemeContext;