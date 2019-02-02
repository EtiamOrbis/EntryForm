import { StyleSheet } from 'react-native';
import * as colors from '../resourses/colors';

export const styles = StyleSheet.create({
  container: { width: '100%', height: '100%', backgroundColor: 'white' },
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
});
