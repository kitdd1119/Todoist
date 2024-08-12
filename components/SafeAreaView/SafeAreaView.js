import { Platform } from 'react-native';

let SafeAreaView;

if (Platform.OS === 'android') {
  SafeAreaView = require('react-native-safe-area-context').SafeAreaView;
} else {
  SafeAreaView = require('react-native').SafeAreaView;
}

export default SafeAreaView;