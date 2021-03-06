// @flow

import { StyleSheet } from 'react-native';
import * as colors from '../resourses/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: { fontSize: 20, paddingLeft: 20 },
  inputsWrapper: {
    backgroundColor: colors.BACKGROUND,
    margin: 10,
    borderRadius: 5,
    paddingVertical: 20,
  },
  formTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dateWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sexContainer: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  sexButtonsWrapper: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.INPUT_BORDER_COLOR,
    overflow: 'hidden',
    flex: 1,
    marginTop: 10,
  },
  sexButton: {
    flex: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    backgroundColor: colors.INPUT_BACKGROUND_COLOR,
    borderColor: colors.INPUT_BORDER_COLOR,
  },
  leftButton: {
    borderRightWidth: 0.5,
  },
  rightButton: {
    borderLeftWidth: 0.5,
  },
  citizenshipContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 10,
    flex: 1,
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: colors.INPUT_BACKGROUND_COLOR,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.INPUT_BORDER_COLOR,
    overflow: 'hidden',
  },
  pickerContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerTextStyle: { fontSize: 16 },
  arrowDown: { width: 12, height: 6 },
  sendButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  sendButtonText: { color: '#fff', fontSize: 17 },
  dateTextInput: {
    textAlign: 'center',
  },
});
