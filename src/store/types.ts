import type { addAnswer, resetState } from "./actions";

type AddAnswerAction = ReturnType<typeof addAnswer>;
type ResetStateAction = ReturnType<typeof resetState>;
export type Action = AddAnswerAction | ResetStateAction;

export type Question = "who" | "what" | "when" | "where";

export type State = {
  questionsLeft: Question[];
  answers: Record<Question, string | null>;
};
