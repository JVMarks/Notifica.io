import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCarrosel: {
    width: width,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  containerImg: {
    alignItems: 'center',
  },
  flatText: {
    fontSize: 22,
    marginTop: 15,   
    letterSpacing: 0,
    lineHeight: 30,
    textAlign: 'center',
    color: theme.colors.on,
    fontFamily: theme.fonts.text400,
  },
  containerbuttons:{
    position: 'absolute',
    top: height/1.30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCreateAccont:{
    width: 300,
    padding: 16,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: theme.colors.on,
  },
  buttonCreateAcconttxt:{
    fontSize: 16,
    textShadowRadius: 4,
    textAlign: 'center',
    color: theme.colors.CreateAccont,
    fontFamily: theme.fonts.title600,
    textShadowOffset: {width: -0.5, height: 2},
  }, 
  loginButton:{
    fontSize: 16,
    opacity: 0.6,
    marginTop: 20,
    color: theme.colors.on,
    fontFamily: theme.fonts.title600,
  } 
});