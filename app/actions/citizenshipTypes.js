// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_CITIZENSHIP } from './actionTypes';

export const setCitizenship = (citizenship: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_CITIZENSHIP,
    value: citizenship,
  });
};
