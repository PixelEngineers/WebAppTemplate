import React from "react";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Center, Checkbox } from "@mantine/core";

function App(props) {
    return (
        <Center maw={400} h={100}>
            <Checkbox
                defaultChecked
                label="I agree to sell my privacy"
            />
        </Center>
    )
}

export default function IndexPage(props) {
  return (
      <MantineProvider>
          <App {...props} />
      </MantineProvider>
  );
}
