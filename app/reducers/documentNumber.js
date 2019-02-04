// @flow
import type { Action, DocumentNumberState } from '../resourses/flowTypes';
import initialState from '../resourses/initialState';
import {
  SET_DOCUMENT_NUMBER, SET_DOCUMENT_SERIES, SET_VALID, CLEAR,
} from '../actions/actionTypes';

export default function documentNumber(
  state: DocumentNumberState = initialState.documentNumber,
  action: Action,
) {
  switch (action.type) {
    case SET_DOCUMENT_SERIES:
      return { ...state, series: action.value };
    case SET_DOCUMENT_NUMBER:
      return { ...state, number: action.value };
    case SET_VALID:
      if (action.value.field === 'SetDocumentNumberValid') {
        return { ...state, numberValid: action.value.value };
      }
      if (action.value.field === 'SetDocumentSeriesValid') {
        return { ...state, seriesValid: action.value.value };
      }
      return state;
    case CLEAR:
      return action.value.documentNumber;
    default:
      return state;
  }
}
