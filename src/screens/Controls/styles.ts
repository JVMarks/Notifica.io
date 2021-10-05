import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  controlsContainer:{
    top: 80,
    width: '90%',
    borderRadius: 10,
    height: height/1.4,
   justifyContent: 'space-around',
    backgroundColor: theme.colors.on,
  },
});