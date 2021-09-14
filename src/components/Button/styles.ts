import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 53,
  },
  text: {
    fontSize: 16,
    textShadowRadius: 4,
    textAlign: 'center',
    color: theme.colors.on,
    fontFamily: theme.fonts.title600,
    textShadowOffset: {width: -0.5, height: 2},
  }
})