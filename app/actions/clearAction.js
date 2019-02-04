// @flow

import type { Dispatch } from '../resourses/flowTypes';
import { CLEAR } from './actionTypes';
import initialState from '../resourses/initialState';

export const setClear = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLEAR,
    value: initialState,
  });
};
