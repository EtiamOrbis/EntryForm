// @flow
import type { Action, DocumentExpiryState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_DOCUMENT_EXPIRY } from '../actions/actionTypes';

export default function documentExpiry(
  state: DocumentExpiryState = initialState.documentExpiry,
  action: Action,
) {
  switch (action.type) {
    case SET_DOCUMENT_EXPIRY:
      return action.value;
    default:
      return state;
  }
}
