// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_DOCUMENT_TYPE } from './actionTypes';
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
