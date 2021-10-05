import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    color: theme.colors.bluelight,
    lineHeight: 38,
    marginTop: 15
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: theme.colors.bluelight,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})