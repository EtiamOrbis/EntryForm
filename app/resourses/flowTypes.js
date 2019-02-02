// @flow
import type { TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet';

type RNStyle = TextStyle | ViewStyle;

export type Style = RNStyle | Style[];

export type Action = {
  type: string,
  value: any,
};

export type Dispatch = (action: Action | ((...arg: Array<any>) => any)) => any;

export type CitizenshipType = {
  label: string,
  code: string,
};

export type UserState = {
  name: string,
  surname: string,
};

export type BirthState = {
  day: string,
  month: string,
  year: string,
};

export type DocumentNoState = {
  series: string,
  number: string,
};

export type DocumentExpiryState = {
  day: string,
  month: string,
  year: string,
};

export type GlobalState = {
  user: UserState,
  birth: BirthState,
  sex: string,
  citizenship: string,
  citizenshipPicker: Array<CitizenshipType>,
  documentType: string,
  documentTypePicker: Array<string>,
  documentExpiry: DocumentExpiryState,
  bonusCard: string,
};
