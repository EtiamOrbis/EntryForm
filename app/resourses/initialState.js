// @flow

import type { GlobalState } from './flowTypes';

const initialState: GlobalState = {
  user: {
    name: '',
    surname: '',
  },
  birth: {
    day: '',
    month: '',
    year: '',
  },
  sex: '',
  citizenship: { label: 'Россия', code: 'RUS' },
  documentType: 'Общегражданский',
  documentNumber: { series: '', number: '' },
  documentExpiry: {
    day: '',
    month: '',
    year: '',
  },
};

export default initialState;
