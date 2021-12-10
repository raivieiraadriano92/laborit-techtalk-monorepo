import React from "react";
import { Box, HStack } from "native-base";

import { Container, Provider, TodoList, ToggleDarkMode } from "@techtalk/ui";

export default () => {
  return (
    <Provider>
      <Container>
        <HStack justifyContent="flex-end">
          <ToggleDarkMode />
        </HStack>
        <Box flex={1} justifyContent="center">
          <TodoList />
        </Box>
      </Container>
    </Provider>
  );
};
