// @flow
import type { Action, UserState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_USER } from '../actions/actionTypes';

export default function user(state: UserState = initialState.user, action: Action) {
  switch (action.type) {
    case SET_USER:
      return action.value;
    default:
      return state;
  }
}
