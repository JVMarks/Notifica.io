import { StyleSheet, Dimensions } from 'react-native';
<<<<<<< HEAD
import { theme } from '../../global/styles/theme';

=======
import { getStatusBarHeight } from 'react-native-iphone-x-helper';    


import { theme } from '../../global/styles/theme';
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
<<<<<<< HEAD
    justifyContent: 'flex-start',
  },
  formContainer: {
    top: 80,
    padding: 38,
    width: '90%',
    borderRadius: 10,
    height: height/1.4,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.on,
  },
=======
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
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
});