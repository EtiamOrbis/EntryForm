// @flow
import type { Action } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_SEX } from '../actions/actionTypes';

export default function sex(state: string = initialState.sex, action: Action) {
  switch (action.type) {
    case SET_SEX:
      return action.value;
    default:
      return state;
  }
}
