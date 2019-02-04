// @flow

import type { GlobalState } from './flowTypes';

const initialState: GlobalState = {
  user: {
    name: '',
    surname: '',
    valid: false,
  },
  birth: {
    day: '',
    month: '',
    year: '',
    valid: false,
  },
  sex: {
    value: '',
    valid: false,
  },
  citizenship: { label: 'Россия', code: 'RUS' },
  documentType: {
    label: 'Общегражданский',
    id: 2,
  },
  documentNumber: {
    series: '',
    number: '',
    numberValid: false,
    seriesValid: false,
  },
  documentExpiry: {
    day: '',
    month: '',
    year: '',
    valid: true,
  },
};

export default initialState;
