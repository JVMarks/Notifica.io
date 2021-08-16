import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';    


import { theme } from '../../global/styles/theme';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getStatusBarHeight()
  },
  formContainer: {
    flex: 1,
    padding: 40,
    width: '85%',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: theme.colors.on,
  }
});