// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_SEX } from './actionTypes';

export const setSex = (sex: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SEX,
    value: sex,
  });
};
