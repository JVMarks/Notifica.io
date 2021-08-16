import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 39,
    fontSize: 13,
    marginTop: 7,
    width: '100%',
    borderWidth: 4,
    borderRadius: 18,
    textAlign: 'left',
    paddingHorizontal: 15,
    color: theme.colors.black,
    fontFamily: theme.fonts.text400,
    borderColor: theme.colors.bluelight,
    backgroundColor: theme.colors.bluelight,
  }
});