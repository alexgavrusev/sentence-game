import { useDispatch } from "react-redux";

import { resetState } from "store/actions";

const useResetState = () => {
  const dispatch = useDispatch();

  return () => dispatch(resetState());
};

export default useResetState;
