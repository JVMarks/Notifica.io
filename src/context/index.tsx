import React from "react";

import { CustomThemeContextProvider } from "./BackgroundColor/index";

const GlobalContext: React.FC = ({ children }) => {
  return (
    <CustomThemeContextProvider>
      {children}
    </CustomThemeContextProvider>
  )
}

export default GlobalContext;