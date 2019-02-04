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
  valid: boolean,
};

export type BirthState = {
  day: string,
  month: string,
  year: string,
  valid: boolean,
};

export type DocumentNumberState = {
  series: string,
  number: string,
  numberValid: boolean,
  seriesValid: boolean,
};

export type DocumentExpiryState = {
  day: string,
  month: string,
  year: string,
  valid: boolean,
};

export type DocumentTypeState = {
  label: string,
  id: number,
};

export type SexTypeState = {
  value: string,
  valid: boolean,
};

export type GlobalState = {
  user: UserState,
  birth: BirthState,
  sex: SexTypeState,
  citizenship: CitizenshipType,
  documentNumber: DocumentNumberState,
  documentType: DocumentTypeState,
  documentExpiry: DocumentExpiryState,
};

export type GetState = () => GlobalState;
