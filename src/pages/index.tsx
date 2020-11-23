import React, { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { Flex } from "@chakra-ui/react";

import useQuestionsLeftLength from "hooks/use-questions-left-length";

import StepContainer from "components/step-container";
import Question from "components/question";
import Result from "components/result";

const Index: FC = () => {
  const questionsLeftLength = useQuestionsLeftLength();
  const isAllAnswered = questionsLeftLength === 0;

  return (
    <Flex minH="100vh" align="center">
      <AnimatePresence>
        <StepContainer motionKey={questionsLeftLength}>
          {isAllAnswered ? <Result /> : <Question />}
        </StepContainer>
      </AnimatePresence>
    </Flex>
  );
};

export default Index;
