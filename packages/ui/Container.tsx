import React, { FunctionComponent } from "react";
import { Box } from "native-base";

export const Container: FunctionComponent = ({ children }) => {
  return (
    <Box
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      flex={1}
      p="3"
      safeAreaTop
    >
      {children}
    </Box>
  );
};
