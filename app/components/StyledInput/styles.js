import { StyleSheet } from 'react-native';
import * as colors from '../../resourses/colors';

// @flow

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input: {
    marginTop: 10,
    backgroundColor: colors.INPUT_BACKGROUND_COLOR,
    borderColor: colors.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '100%',
    fontSize: 16,
  },
  error: {
    color: colors.TEXT_COLOR_WRONG,
    marginTop: 3,
    marginLeft: 3,
  },
});
