// @flow
import type { Action, BirthState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_BIRTH } from '../actions/actionTypes';

export default function birth(state: BirthState = initialState.birth, action: Action) {
  switch (action.type) {
    case SET_BIRTH:
      return action.value;
    default:
      return state;
  }
}
