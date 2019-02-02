// @flow
import type { Action, DocumentNumberState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_DOCUMENT_NUMBER } from '../actions/actionTypes';

export default function documentNumber(
  state: DocumentNumberState = initialState.documentNumber,
  action: Action,
) {
  switch (action.type) {
    case SET_DOCUMENT_NUMBER:
      return action.value;
    default:
      return state;
  }
}
