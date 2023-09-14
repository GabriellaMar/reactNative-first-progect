import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
// import { StyleSheet, View } from 'react-native';
import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';
// import PostsScreen from './src/Screens/PostsScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';
// import CommentsScreen from './src/Screens/CommentsScreen';


const MainStack = createStackNavigator();

const MainNavigator = ()=>{
     return (
        <NavigationContainer>
              <MainStack.Navigator initialRouteName="RegistrationScreen">
                <MainStack.Screen 
                name="LoginScreen"
                 component={LoginScreen}
                 options={{ headerShown: false }}
                  />
                <MainStack.Screen 
                name="RegistrationScreen"
                 component={RegistrationScreen} 
                 options={{ headerShown: false }}
                 />
                {/* <MainStack.Screen name="PostsScreen" component={PostsScreen}   />
                <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
                <MainStack.Screen name="ProfileScreen" component={ProfileScreen}  /> */}
                 <MainStack.Screen  
                 name="BottomTabNavigator" 
                 component={BottomTabNavigator} 
                 options={{ headerShown: false }}
                 />
                {/* <MainStack.Screen
                   name="Comments"
                   component={CommentsScreen}
                   options={({ navigation }) => ({
                     header: () => (
                       <CustomHeader
                         title={'Comments'}
                         navigation={navigation}
                         position={'left'}
                       />
                     ),
                   })}
                 /> */}
                {/* <MainStack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ headerShown: false }}
                /> */}
              </MainStack.Navigator>
            </NavigationContainer>
          );
}

export default MainNavigator;