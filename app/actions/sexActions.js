// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_SEX, SET_VALID } from './actionTypes';

export const setSex = (sex: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SEX,
    value: sex,
  });
  dispatch({
    type: SET_VALID,
    value: {
      field: 'sex',
      value: true,
    },
  });
};
