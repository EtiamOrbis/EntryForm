// @flow
import type { Action, DocumentExpiryState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import {
  SET_DOCUMENT_EXPIRY_DAY,
  SET_DOCUMENT_EXPIRY_MONTH,
  SET_DOCUMENT_EXPIRY_YEAR,
} from '../actions/actionTypes';

export default function documentExpiry(
  state: DocumentExpiryState = initialState.documentExpiry,
  action: Action,
) {
  switch (action.type) {
    case SET_DOCUMENT_EXPIRY_DAY:
      return { ...state, day: action.value };
    case SET_DOCUMENT_EXPIRY_MONTH:
      return { ...state, month: action.value };
    case SET_DOCUMENT_EXPIRY_YEAR:
      return { ...state, year: action.value };
    default:
      return state;
  }
}
