import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from 'expo-vector-icons';



 export const HeaderBtnBack =()=>{

    const navigation = useNavigation();
    return (
        <TouchableOpacity  
        // styles = {styles.headerBtnLogout}
        onPress={() => navigation.navigate('LoginScreen')}
        >
            <AntDesign name="arrowleft" size={24} color='rgba(33, 33, 33, 0.8)' top ={6}/>
        </TouchableOpacity>
    )
}