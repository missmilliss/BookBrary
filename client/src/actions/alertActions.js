import { SET_ALERT, REMOVE_ALERT } from './types';
import { v1 as uuidv1 } from 'uuid';

export const setAlert = (msg, alertType, timeout = 3000) => (dispatch) => {
  const id = uuidv1();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};
