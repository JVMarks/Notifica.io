import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  items:{
    display: 'flex',
    height: 500,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginBottom: '25%', 
    //paddingHorizontal: 31, 
    paddingVertical: 30
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 31, 
    position: 'relative',
    marginBottom: 0,
  },
  controlsContainer: {
    top: 80,
    width: '90%',
    borderRadius: 20,
    height: height / 1.4,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.on,
  },
  loadingcontainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  loadingtxt: {
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    opacity: 0.3,
    marginTop: 25,
    bottom: 0,
  }
});