import axios from 'axios';

const api = axios.create({
  baseURL: 'https://notifica-io.herokuapp.com'
});

export { api }

/*
Necessarios:
yarn add @react-navigation/native
yarn add @react-navigation/stack
yarn add react-native-svg
yarn add --dev react-native-svg-transformer
expo install react-native-svg
yarn add axios
expo install @react-native-async-storage/async-storage
yarn add react-native-iphone-x-helper
yarn add react-native-community/datetimepicker
yarn add @react-navigation/bottom-tabs
expo install expo-notifications
yarn add date-fns
yarn add lottie-react-native
yarn add lottie-ios@3.2.3
yarn add react-native-swiper-flatlist
yarn add react-native-dialog

USADOS:
expo install expo-constants
expo install expo-linear-gradient
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add react-native-gesture-handler
react-native link react-native-gesture-handler
expo install expo-auth-session expo-random
yarn add dotenv babel-plugin-inline-dotenv
yarn add react-native-uuid
expo install expo-speech
------------------------------------------
to start the code:
APP - expo start
SERVER - json-server ./src/services/server.json --host 192.168.0.4 --port 19012

Versão dos pacotes:
npx react-native upgrade
expo install expo-updates
npm install -g n
npm install --global yarn
npm install -g expo-cli
choco upgrade nodejs-lts

 npm cache clean -f
*/
