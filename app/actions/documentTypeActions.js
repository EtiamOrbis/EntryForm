// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_DOCUMENT_TYPE, SET_DOCUMENT_NUMBER, SET_DOCUMENT_SERIES } from './actionTypes';
import DOCUMENT_TYPES from '../resourses/documents';

export const setDocumentType = (documentTypeLabel: string) => (dispatch: Dispatch) => {
  DOCUMENT_TYPES.forEach((item) => {
    if (item.label === documentTypeLabel) {
      dispatch({
        type: SET_DOCUMENT_TYPE,
        value: item,
      });
    }
  });
};

export const setDocumentSeries = (documentSeries: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DOCUMENT_SERIES,
    value: documentSeries,
  });
};

export const setDocumentNumber = (documentNumber: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DOCUMENT_NUMBER,
    value: documentNumber,
  });
};
