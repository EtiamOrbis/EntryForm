// @flow
import type { Action, DocumentExpiryState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import {
  SET_DOCUMENT_EXPIRY_DAY,
  SET_DOCUMENT_EXPIRY_MONTH,
  SET_DOCUMENT_EXPIRY_YEAR,
  SET_VALID,
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
    case SET_VALID:
      if (action.value.field === 'documentExpiry') {
        return { ...state, valid: action.value.value };
      }
      return state;
    default:
      return state;
  }
}
