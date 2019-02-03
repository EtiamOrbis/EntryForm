// @flow

import type { Action, BirthState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_BIRTH_DAY, SET_BIRTH_MONTH, SET_BIRTH_YEAR } from '../actions/actionTypes';

export default function birth(state: BirthState = initialState.birth, action: Action) {
  switch (action.type) {
    case SET_BIRTH_DAY:
      return { ...state, day: action.value };
    case SET_BIRTH_MONTH:
      return { ...state, month: action.value };
    case SET_BIRTH_YEAR:
      return { ...state, year: action.value };
    default:
      return state;
  }
}
