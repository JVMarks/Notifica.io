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
    width: '100%',
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    marginTop: getStatusBarHeight(),
  },
  selecionFloor: {
    width: 270,
    height: 40,
    borderRadius: 10,
    textAlign: 'left',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.on
  },
  headerfiltericon: {
    marginLeft: 5,
  },
  input: {
    height: 39,
    fontSize: 13,
    marginTop: 7,
    width: '83%',
    borderWidth: 4,
    marginBottom: 3,
    borderRadius: 18,
    textAlign: 'left',
    paddingHorizontal: 15,
    justifyContent: 'center',
    color: theme.colors.black,
    fontFamily: theme.fonts.text400,
    borderColor: theme.colors.bluelight,
    backgroundColor: theme.colors.bluelight,
  },
});