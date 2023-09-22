import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
// import { StyleSheet, View } from 'react-native';
import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';
import MapScreen from "../Screens/MapScreen";
// import PostsScreen from './src/Screens/PostsScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';
 import CommentsScreen from '../Screens/CommentsScreen';
import { HeaderBtnBack } from "../components/HeaderBtnBack";
import { HeaderTittle } from "../components/HeaderTittle";


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
                 <MainStack.Screen  
                 name="BottomTabNavigator" 
                 component={BottomTabNavigator} 
                 options={{ headerShown: false }}
                 />
                  <MainStack.Screen 
                name="MapScreen"
                 component={MapScreen}
                 options={{ headerShown: false }}
                  />
                 <MainStack.Screen
                   name="Comments"
                   component={CommentsScreen}
                   options={{
                    headerShown: true,
                    // title: 'Публікації',
                    headerTitleAlign: 'center',
                    headerLeftContainerStyle: {
                      paddingLeft: 16,
                   },
                    tabBarStyle: { display: 'none', },
     
                    headerTitle: () => < HeaderTittle tittle={'Коментарі'} />,
                    headerLeft: () => <HeaderBtnBack />,
                 }}
                 /> 
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