// @flow
import type { Action, CitizenshipType } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_CITIZENSHIP } from '../actions/actionTypes';

export default function citizenship(
  state: CitizenshipType = initialState.citizenship,
  action: Action,
) {
  switch (action.type) {
    case SET_CITIZENSHIP:
      return action.value;
    default:
      return state;
  }
}
