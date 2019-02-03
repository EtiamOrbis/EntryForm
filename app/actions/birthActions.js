// @flow

import type { Dispatch } from '../resourses/flowTypes';
import { SET_BIRTH_DAY, SET_BIRTH_MONTH, SET_BIRTH_YEAR } from './actionTypes';

const currentYear = new Date().getFullYear();

console.log(currentYear);

const validator = (text: string, type: string) => {
  if (text !== '') {
    let Text = text.split();
    Text = Text.map(letter => letter.replace(/[^0-9]+/g, ''));
    Text = Text.join();
    if (type === 'day' && Number(Text) <= 31 && Number(Text[0]) + Number(Text[1]) !== 0) {
      return Text;
    }
    if (type === 'month' && Number(Text) <= 12 && Number(Text[0]) + Number(Text[1]) !== 0) {
      return Text;
    }
    if (type === 'year' && Number(Text) <= currentYear) {
      return Text;
    }
    return Text.substr(0, Text.length - 1);
  }
  return text;
};

export const setBirthDay = (day: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_BIRTH_DAY,
    value: validator(day, 'day'),
  });
};

export const setBirthMonth = (month: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_BIRTH_MONTH,
    value: validator(month, 'month'),
  });
};

export const setBirthYear = (year: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_BIRTH_YEAR,
    value: validator(year, 'year'),
  });
};
