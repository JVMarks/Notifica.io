import { StyleSheet, Dimensions } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: 144,
    height: 134,
    borderRadius: 30,
    backgroundColor: theme.colors.on,
  },
  text: {
    marginTop: 20,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: theme.fonts.text400
  }
});