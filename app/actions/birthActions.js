// @flow

import type { Dispatch } from '../resourses/flowTypes';
import {
  SET_BIRTH_DAY, SET_BIRTH_MONTH, SET_BIRTH_YEAR, SET_VALID,
} from './actionTypes';
import { validator } from '../lib/dataValidator';

export const setBirthDay = (day: string) => (dispatch: Dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_BIRTH_DAY,
    value: validator(day, 'day', 'birth'),
  });
  if (state.birth.month !== '' && state.birth.year !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'birth',
        value: true,
      },
    });
  }
};

export const setBirthMonth = (month: string) => (dispatch: Dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_BIRTH_MONTH,
    value: validator(month, 'month', 'birth'),
  });
  if (state.birth.day !== '' && state.birth.year !== '') {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'birth',
        value: true,
      },
    });
  }
};

export const setBirthYear = (year: string) => (dispatch: Dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SET_BIRTH_YEAR,
    value: validator(year, 'year', 'birth'),
  });
  if (state.birth.day !== '' && state.birth.month !== '' && year.length === 4) {
    dispatch({
      type: SET_VALID,
      value: {
        field: 'birth',
        value: true,
      },
    });
  }
};
