import { FC } from "react";
import { Heading, Button, Stack } from "@chakra-ui/react";

import useResetState from "hooks/use-reset-state";
import useResult from "hooks/use-result";

const Result: FC = () => {
  const resetState = useResetState();
  const result = useResult();

  return (
    <>
      <Stack spacing={6}>
        <Heading size="lg">{result}</Heading>
        <Button onClick={resetState}>Reset</Button>
      </Stack>
    </>
  );
};

export default Result;
