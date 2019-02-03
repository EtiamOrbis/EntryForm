// @flow
import type { Dispatch } from '../resourses/flowTypes';
import {
  SET_DOCUMENT_TYPE,
  SET_DOCUMENT_NUMBER,
  SET_DOCUMENT_SERIES,
  SET_DOCUMENT_EXPIRY_DAY,
  SET_DOCUMENT_EXPIRY_MONTH,
  SET_DOCUMENT_EXPIRY_YEAR,
} from './actionTypes';
import DOCUMENT_TYPES from '../resourses/documents';
import { validator } from '../lib/dataValidator';

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

export const setDocumentExpiryDay = (day: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DOCUMENT_EXPIRY_DAY,
    value: validator(day, 'day', 'doc'),
  });
};

export const setDocumentExpiryMonth = (month: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DOCUMENT_EXPIRY_MONTH,
    value: validator(month, 'month', 'doc'),
  });
};

export const setDocumentExpiryYear = (year: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DOCUMENT_EXPIRY_YEAR,
    value: validator(year, 'year', 'doc'),
  });
};
