import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  controlsContainer: {
    top: 80,
    width: '90%',
    borderRadius: 20,
    height: height / 1.4,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.on,
  },
  versioncontainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  version: {
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    opacity: 0.3,
    marginTop: 25,
    bottom: 0,
  }
});