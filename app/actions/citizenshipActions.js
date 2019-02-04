// @flow
import type { Dispatch } from '../resourses/flowTypes';
import { SET_CITIZENSHIP, SET_VALID } from './actionTypes';
import PASS_COUNTRY from '../resourses/countries';

export const setCitizenship = (citizenshipLabel: string) => (dispatch: Dispatch) => {
  PASS_COUNTRY.forEach((item) => {
    if (item.label === citizenshipLabel) {
      dispatch({
        type: SET_CITIZENSHIP,
        value: item,
      });
      dispatch({
        type: SET_VALID,
        value: {
          field: 'citizenship',
          value: true,
        },
      });
    }
  });
};
