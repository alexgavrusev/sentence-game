import type { Question } from "./types";

export const resultStringOrder: Question[] = ["who", "what", "where", "when"];

export const questions: Record<Question, string> = {
  who: "Who?",
  what: "What?",
  when: "When?",
  where: "Where?",
};
