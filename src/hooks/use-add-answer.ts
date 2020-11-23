import { useDispatch } from "react-redux";

import { addAnswer } from "store/actions";

const useAddAnswer = () => {
  const dispatch = useDispatch();

  return (payload: string) => dispatch(addAnswer(payload));
};

export default useAddAnswer;
