import type { Reducer } from "redux";

import type { Action, State } from "./types";

const initialState: State = {
  questionsLeft: ["who", "what", "when", "where"],
  answers: {
    who: null,
    what: null,
    when: null,
    where: null,
  },
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      const { questionsLeft, answers } = state;

      if (questionsLeft.length === 0) {
        throw new Error();
      }

      const currentQuestion = questionsLeft[0];

      return {
        // Remove current question
        questionsLeft: questionsLeft.slice(1),
        answers: {
          ...answers,
          [currentQuestion]: action.payload,
        },
      };

    case "RESET_STATE":
      return initialState;

    default:
      return state;
  }
};

export default reducer;
