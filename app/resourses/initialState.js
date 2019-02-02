import type { GlobalState } from './flowTypes';
import PASS_COUNTRY from './countries';

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
  citizenship: 'Россия',
  citizenshipPicker: PASS_COUNTRY,
  documentType: 'Общегражданский',
  documentTypePicker: ['Заграничный', 'Общегражданский', 'Свидетельство'],
  documentExpiry: {
    day: '',
    month: '',
    year: '',
  },
  bonusCard: 'Нет',
};

export default initialState;
