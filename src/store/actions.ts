export const addAnswer = (payload: string) => ({
  type: "ADD_ANSWER" as const,
  payload,
});

export const resetState = () => ({ type: "RESET_STATE" as const });
