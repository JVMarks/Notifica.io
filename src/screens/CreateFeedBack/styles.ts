import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

const { height } = Dimensions.get('screen');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formContainer: {
    top: 40,
    marginTop: 65,
    padding: 38,
    width: '90%',
    height: height - 200,
    borderRadius: 20,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.on,
  },
  input: {
    height: 39,
    fontSize: 13,
    marginTop: 7,
    width: '100%',
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
  txtcommet:{
    height: 150,
    fontSize: 13,
    marginTop: 7,
    width: '100%',
    borderWidth: 4,
    marginBottom: 3,
    borderRadius: 18,
    paddingBottom: 30, 
    textAlign: 'left',
    paddingHorizontal: 15,
    justifyContent: 'center',
    color: theme.colors.black,
    fontFamily: theme.fonts.text400,
    borderColor: theme.colors.bluelight,
    backgroundColor: theme.colors.bluelight,
  }
});