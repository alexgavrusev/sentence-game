import { useSelector } from "react-redux";

import type { State } from "store/types";
import { resultStringOrder } from "store/constants";

const useResult = () =>
  useSelector((state: State) =>
    resultStringOrder.map((question) => state.answers[question]).join(" ")
  );

export default useResult;
