import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
// import RegistrationScreen from './src/Screens/RegistrationScreen';
// import LoginScreen from './src/Screens/LoginScreen';
// import PostsScreen from './src/Screens/PostsScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';
// import HomeScreen from './src/Screens/HomeScreen'
import 'react-native-gesture-handler';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import CreatePostsScreen from './src/Screens/CreatePostsScreen';
// import CommentsScreen from './src/Screens/CommentsScreen';
import MainNavigator from './src/routes/MainNavigator';

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
    <>
    <MainNavigator/>
    <StatusBar style="auto" />
    </>
// {/* <NavigationContainer>
//       <MainStack.Navigator initialRouteName="RegistrationScreen">
//         <MainStack.Screen 
//         name="LoginScreen"
//          component={LoginScreen}
//          options={{ headerShown: false }}
//           />
//         <MainStack.Screen 
//         name="RegistrationScreen"
//          component={RegistrationScreen} 
//          options={{ headerShown: false }}
//          />
//         <MainStack.Screen name="PostsScreen" component={PostsScreen}   />
//         <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
//         <MainStack.Screen name="ProfileScreen" component={ProfileScreen}  />
//         {/* <MainStack.Screen
//            name="Comments"
//            component={CommentsScreen}
//            options={({ navigation }) => ({
//              header: () => (
//                <CustomHeader
//                  title={'Comments'}
//                  navigation={navigation}
//                  position={'left'}
//                />
//              ),
//            })}
//          /> */}
//         <MainStack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{ headerShown: false }}
//         />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   ); */}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor:"#FFFFFF",

  },

});
