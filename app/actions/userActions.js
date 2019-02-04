// @flow
import type { Dispatch, GetState } from '../resourses/flowTypes';
import { SET_NAME, SET_SURNAME, SET_VALID } from './actionTypes';

const validator = text => text.replace(/[^a-zA-Zа-яёА-ЯЁ]/g, '');

export const setName = (name: string) => (dispatch: Dispatch, getState: GetState) => {
  dispatch({
    type: SET_NAME,
    value: validator(name),
  });
  if (getState().user.surname !== '' && name !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'user',
        value: true,
      },
    });
  }
};

export const setSurname = (surname: string) => (dispatch: Dispatch, getState: GetState) => {
  dispatch({
    type: SET_SURNAME,
    value: validator(surname),
  });
  if (getState().user.name !== '' && surname !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'user',
        value: true,
      },
    });
  }
};
