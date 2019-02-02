import { combineReducers } from 'redux';
import user from './user';
import citizenship from './citizenship';
import documentType from './documentType';
import documentNumber from './documentNumber';
import documentExpiry from './documentExpiry';
import sex from './sex';
import birth from './birth';

const reducer = combineReducers({
  birth,
  citizenship,
  documentExpiry,
  documentNumber,
  documentType,
  sex,
  user,
});

export default reducer;
