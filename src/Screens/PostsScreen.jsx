import { useRoute } from "@react-navigation/native";
import UserAvatar from '../../assets/avatar.jpg';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";

const PostsScreen = () => {
    const route = useRoute();
    const { name, email } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.profileWrapper}>
                <View style={styles.avatarWrapper} >
                <Image style={styles.avatar} source={UserAvatar} />
                </View>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userEmail}>{email}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 32,

    },

    avatarWrapper: {
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    profileWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    userName:{ 
        fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '700',
    color: '#212121',
},
userEmail:{ 
    fontFamily: 'Roboto-Bold',
fontSize: 11,
lineHeight: 13,
fontWeight: '400',
color: 'rgba(33, 33, 33, 0.8)',
},
})


export default PostsScreen;