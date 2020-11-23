import { useSelector } from "react-redux";

import type { State } from "store/types";

const useQuestionsLeftLength = () =>
  useSelector((state: State) => state.questionsLeft.length);

export default useQuestionsLeftLength;
