// @flow
import type { Action, DocumentTypeState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import { SET_DOCUMENT_TYPE, CLEAR } from '../actions/actionTypes';

export default function documentType(
  state: DocumentTypeState = initialState.documentType,
  action: Action,
) {
  switch (action.type) {
    case SET_DOCUMENT_TYPE:
      return action.value;
    case CLEAR:
      return action.value.documentType;
    default:
      return state;
  }
}
