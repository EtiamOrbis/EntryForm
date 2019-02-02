// @flow
import type { Action, UserState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_NAME, SET_SURNAME } from '../actions/actionTypes';

export default function user(state: UserState = initialState.user, action: Action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.value };
    case SET_SURNAME:
      return { ...state, surname: action.value };
    default:
      return state;
  }
}
