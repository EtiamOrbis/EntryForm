// @flow
import type { Dispatch } from '../resourses/flowTypes';
import {
  SET_DOCUMENT_TYPE,
  SET_DOCUMENT_NUMBER,
  SET_DOCUMENT_SERIES,
  SET_DOCUMENT_EXPIRY_DAY,
  SET_DOCUMENT_EXPIRY_MONTH,
  SET_DOCUMENT_EXPIRY_YEAR,
  SET_VALID,
} from './actionTypes';
import DOCUMENT_TYPES from '../resourses/documents';
import { validator } from '../lib/dataValidator';

const documentSeriesValidate = (text: string, id, dispatch: Dispatch) => {
  if (id === 3) {
    if (text) {
      if (text[0].match(/[XVI]/g)) {
        const valid = text.match(
          /^(M{0,3}(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])){1,2}[А-Я]{2}$/,
        );
        if (valid) {
          dispatch({
            type: SET_VALID,
            value: {
              field: 'SetDocumentSeriesValid',
              value: true,
            },
          });
          return;
        }
      }
      dispatch({
        type: SET_VALID,
        value: {
          field: 'SetDocumentSeriesValid',
          value: false,
        },
      });
    }
  }
};

export const setDocumentType = (documentTypeLabel: string) => (dispatch: Dispatch) => {
  DOCUMENT_TYPES.forEach((item) => {
    if (item.label === documentTypeLabel) {
      dispatch({
        type: SET_DOCUMENT_TYPE,
        value: item,
      });
      dispatch({
        type: SET_VALID,
        value: {
          field: 'documentType',
          value: false,
        },
      });
    }
  });
};

export const setDocumentSeries = (documentSeries: string) => (dispatch: Dispatch, getState) => {
  documentSeriesValidate(documentSeries, getState().documentType.id, dispatch);
  dispatch({
    type: SET_DOCUMENT_SERIES,
    value: documentSeries,
  });
};

export const setDocumentNumber = (documentNumber: string) => (dispatch: Dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_DOCUMENT_NUMBER,
    value: documentNumber,
  });
  if (state.documentType.id === 1 && documentNumber.length === 7) {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'SetDocumentNumberValid',
        value: true,
      },
    });
  }
  if (state.documentType.id === 2 && documentNumber.length === 6) {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'SetDocumentNumberValid',
        value: true,
      },
    });
  }
  if (state.documentType.id === 3 && documentNumber.length === 6) {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'SetDocumentNumberValid',
        value: true,
      },
    });
  }
};

export const setDocumentExpiryDay = (day: string) => (dispatch: Dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_DOCUMENT_EXPIRY_DAY,
    value: validator(day, 'day', 'doc'),
  });
  if (state.documentExpiry.month !== '' && state.documentExpiry.year !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'documentExpiry',
        value: true,
      },
    });
  }
};

export const setDocumentExpiryMonth = (month: string) => (dispatch: Dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_DOCUMENT_EXPIRY_MONTH,
    value: validator(month, 'month', 'doc'),
  });
  if (state.documentExpiry.day !== '' && state.documentExpiry.year !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'documentExpiry',
        value: true,
      },
    });
  }
};

export const setDocumentExpiryYear = (year: string) => (dispatch: Dispatch) => {
  const state = getState();
  dispatch({
    type: SET_DOCUMENT_EXPIRY_YEAR,
    value: validator(year, 'year', 'doc'),
  });
  if (state.documentExpiry.day !== '' && state.documentExpiry.month !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'documentExpiry',
        value: true,
      },
    });
  }
};
