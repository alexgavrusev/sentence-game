import { useSelector } from "react-redux";

import type { State } from "store/types";
import { questions } from "store/constants";

const useCurrentQuestionText = () =>
  useSelector((state: State) => questions[state.questionsLeft[0]]);

export default useCurrentQuestionText;
