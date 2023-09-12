import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



 export const HeaderBtnLogout =()=>{

    const navigation = useNavigation();
    return (
        <TouchableOpacity  
        // styles = {styles.headerBtnLogout}
        onPress={() => navigation.navigate('LoginScreen')}
        >
        <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
    )
}

// const styles = StyleSheet.create({
//     headerBtnLogout: {
//       right: 16,
//     },
//   });