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
  citizenship: 'Россия',
  citizenshipPicker: [],
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
