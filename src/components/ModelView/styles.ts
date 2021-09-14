import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  bar: {
    width: 39,
    height: 3,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  },
  background:{
    color: theme.colors.CreateAccont
  }
});