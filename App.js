import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';

import MainNavigator from './src/routes/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// const MainStack = createStackNavigator();



export default function App() {

  const [fontsLoaded] = useFonts({

    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
    <PersistGate
      loading={<Text>Loading...</Text>}
      persistor={store.persistor}
    >

    <MainNavigator/>
    <StatusBar style="auto" />

    </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor:"#FFFFFF",

  },

});
