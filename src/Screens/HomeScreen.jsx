import { View, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from './CreatePostsScreen';
import { HeaderBtnLogout } from "../components/HeaderBtnLogout";
import { HeaderBtnBack } from "../components/HeaderBtnBack"
import { Feather, Ionicons } from '@expo/vector-icons';
import { HeaderTittle } from "../components/HeaderTittle";
const Tabs = createBottomTabNavigator();

const Home = () => {
   return (
      <Tabs.Navigator style={styles.container}
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
               let iconName;
               color = focused ? "#FF6C00" : 'rgba(33, 33, 33, 0.8)';
               if (route.name === 'PostsScreen') {

                  iconName = focused ? 'grid' : 'grid-outline';
                  return <Ionicons name={iconName} size={24} color={color} />;
               }
               else if (route.name === 'CreatePostsScreen') {
                  color = focused ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)';
                  let backgroundColor = focused ? '#FF6C00' : '#F6F6F6';
                  return (
                     <View
                        style={{
                           justifyContent: 'center',
                           alignItems: 'center',
                           backgroundColor: backgroundColor,
                           width: 70,
                           height: 40,
                           borderRadius: 20,
                        }}
                     >
                        <Feather name={'plus'} size={24} color={color} />
                     </View>
                  )
               }
               if (route.name === 'ProfileScreen') {
                  iconName = focused ? 'user' : 'user';
                  return <Feather name={iconName} size={24} color={color} />;
               }


            },
            tabBarShowLabel: false,
            activeTintColor: "#FF6C00",
            inactiveTintColor: "#F6F6F6",
            headerRightContainerStyle: { paddingRight: 16, paddingBottom: 9 },
            headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 9 },
            tabBarStyle: { height: 70, justifyContent: 'center' },

         })}
      >
         <Tabs.Screen style={styles.container}
            name="PostsScreen"
            component={PostsScreen}
            options={{
               headerShown: true,
               // title: 'Публікації',
               headerTitleAlign: 'center',
               headerTitle: () => < HeaderTittle tittle={'Публікації'}/>,
               headerRight: () => <HeaderBtnLogout style={{ marginRight: 20 }} />,
               headerRightContainerStyle: {
                  paddingRight: 16,
                },
                headerLeftContainerStyle: {
                  paddingLeft: 16,
                },
                headerTitleContainerStyle: {
                  paddingTop: 11, 
                  paddingBottom: 11, 
                },
                
               //  headerStatusBarHeight: 88,
            }}

               screenOptions={{
                  headerRightContainerStyle: {
                    paddingRight: 26,
                  },
                  headerLeftContainerStyle: {
                    paddingLeft: 6,
                  },    
                }}
         />
         <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen}
          options={{
            headerShown: true,
            // title: 'Публікації',
            headerTitleAlign: 'center',
            tabBarStyle: { display: 'none' },
            headerTitle: () => < HeaderTittle tittle={'Створити публікацію'}/>,
            headerLeft: () => <HeaderBtnBack  />,
          }}
         
         />
         <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />

      </Tabs.Navigator>

   )
}


const styles = StyleSheet.create({

   container: {
      backgroundColor: "white",
      height: '100%',
   },
   header: {
      padding: 50,
   }
})


export default Home;