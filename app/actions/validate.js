import type { Dispatch } from '../resourses/flowTypes';
import { SET_INVALID } from './actionTypes';

export const setValid = (param: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_INVALID,
    value: param,
  });
};
