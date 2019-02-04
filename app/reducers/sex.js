// @flow
import type { Action, SexTypeState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_SEX, SET_VALID } from '../actions/actionTypes';

export default function sex(state: SexTypeState = initialState.sex, action: Action) {
  switch (action.type) {
    case SET_SEX:
      return { ...state, value: action.value };
    case SET_VALID:
      if (action.value.field === 'sex') {
        return { ...state, valid: action.value.value };
      }
      return state;
    default:
      return state;
  }
}
