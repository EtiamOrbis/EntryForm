// @flow

import type { Dispatch } from '../resourses/flowTypes';
import { SET_BIRTH_DAY, SET_BIRTH_MONTH, SET_BIRTH_YEAR } from './actionTypes';
import { validator } from '../lib/dataValidator';

export const setBirthDay = (day: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_BIRTH_DAY,
    value: validator(day, 'day', 'birth'),
  });
};

export const setBirthMonth = (month: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_BIRTH_MONTH,
    value: validator(month, 'month', 'birth'),
  });
};

export const setBirthYear = (year: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_BIRTH_YEAR,
    value: validator(year, 'year', 'birth'),
  });
};
