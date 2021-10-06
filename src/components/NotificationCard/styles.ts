import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 10,
    maxWidth: 300,
    marginBottom: 30,
    borderRadius: 18,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: theme.fonts.title500,
  },
  headerReadicon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  priority: {
    padding: 3,
    fontSize: 10,
    borderRadius: 16,
    paddingHorizontal: 5.5,
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    backgroundColor: theme.colors.highlight,
  },
  category: {
    padding: 3,
    fontSize: 10,
    marginLeft: 5,
    borderRadius: 16,
    paddingHorizontal: 5.5,
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    backgroundColor: theme.colors.CreateAccont2,
  },
  containerMessage: {
    padding: 5,
    borderRadius: 20,
    fontFamily: theme.fonts.text400,
    backgroundColor: theme.colors.on2,
  },
  message: {
    padding: 5,
    fontSize: 13,
    color: theme.colors.black,
    fontFamily: theme.fonts.text400,
  },
  containerBottom: {
    marginTop: 10,
  },
  bottomText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: theme.fonts.text400,
  }
});