import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    top: 0,
    width: 150,
    height: 150,
    position: 'absolute',
    backgroundColor: theme.colors.on,
  },
  containerForm: {
    bottom: -60,
    width: width,
    borderRadius: 80,
    height: height / 1.26,
    position: 'absolute',
    backgroundColor: theme.colors.on,
    marginBottom: getStatusBarHeight() - height / 5,
  },
  form: {
    paddingHorizontal: 70,
  },
  title: {
    fontSize: 17,
    marginTop: 35,
    color: theme.colors.CreateAccont,
    fontFamily: theme.fonts.title500,
  },
  containerInput: {
    marginTop: 25,
  },
  containerButton: {
    marginTop: 35,
    paddingHorizontal: 35,
  },
  loginButton: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.CreateAccont,
    fontFamily: theme.fonts.title600,
  }
});