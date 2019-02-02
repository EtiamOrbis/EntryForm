// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_NAME, SET_SURNAME } from './actionTypes';

const validator = (text) => {
  let Text = text.split();
  Text = Text.map(letter => letter.replace(/[^a-zA-Zа-яёА-ЯЁ]+/g, ''));
  return Text.join();
};

export const setName = (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_NAME,
    value: validator(name),
  });
};

export const setSurname = (surname: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SURNAME,
    value: validator(surname),
  });
};
