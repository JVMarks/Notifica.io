import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    
  },
  user: {
    flexDirection: 'row',   
  },
  greeting: {
    fontFamily: theme.fonts.text400,
    fontSize: 28,
    color: theme.colors.on,
    marginRight: 3
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 28,
    color: theme.colors.on
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.on,
    fontSize: 12
  },
});