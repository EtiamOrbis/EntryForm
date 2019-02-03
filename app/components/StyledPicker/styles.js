import { StyleSheet } from 'react-native';
import * as colors from '../../resourses/colors';

// @flow

export const styles = StyleSheet.create({
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
});
