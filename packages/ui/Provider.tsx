import React, { FunctionComponent } from "react";
import { extendTheme, NativeBaseProvider } from "native-base";

const theme = extendTheme({
  colors: {
    // primary: {
    //   50: "#FFFFFF",
    //   100: "#FFF6F0",
    //   200: "#FFDDC7",
    //   300: "#FFC39F",
    //   400: "#FFAA76",
    //   500: "#FF914D",
    //   600: "#FF751F",
    //   700: "#F05C00",
    //   800: "#C24A00",
    //   900: "#943900",
    // },
  },
});

export const Provider: FunctionComponent = ({ children }) => {
  return <NativeBaseProvider {...{ theme }}>{children}</NativeBaseProvider>;
};
