import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: width,
    borderRadius: 80,
    marginBottom: 20,
    shadowColor: "#000",
    //height: height / 2,
    paddingHorizontal: 50,
    justifyContent: 'center',
    backgroundColor: theme.colors.highlight,
    marginTop: getStatusBarHeight() - height/4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  perfil: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 90,
  },
  countNotification: {
    width: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  countText: {
    padding: 3,
    fontSize: 14,
    textAlign: 'center',
    color: theme.colors.on,
    fontFamily: theme.fonts.title600,
  },
  containerButtons: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttons: {
    width: 144,
    height: 134,
    margin: 10,
    marginBottom: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.on,
  },
  text: {
    marginTop: 20,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: theme.fonts.text400
  }
});