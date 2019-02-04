// @flow

import type { Action, GlobalState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { CLEAR } from '../actions/actionTypes';

export default function clear(state: GlobalState = initialState, action: Action) {
  switch (action.type) {
    case CLEAR:
      return action.value;
    default:
      return state;
  }
}
