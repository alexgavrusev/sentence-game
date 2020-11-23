import React, { FC, useState } from "react";
import {
  chakra,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

import useCurrentQuestionText from "hooks/use-current-question-text";
import useAddAnswer from "hooks/use-add-answer";

const Question: FC = () => {
  const currentQuestionText = useCurrentQuestionText();
  const addAnswer = useAddAnswer();

  const [answer, setAnswer] = useState("");

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        addAnswer(answer);
        setAnswer("");
      }}
    >
      <Stack as={FormControl} spacing={6}>
        <Heading as={FormLabel} size="lg">
          {currentQuestionText}
        </Heading>

        <Input value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <Button type="submit">Next</Button>
      </Stack>
    </chakra.form>
  );
};

export default Question;
