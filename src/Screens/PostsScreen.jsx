import { useNavigation, useRoute } from "@react-navigation/native";
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
    TouchableWithoutFeedback,
    FlatList
} from "react-native";
import Post from "../components/Post";
import { useState } from "react";
import { postsData } from "../postsData/postsData";


const PostsScreen = () => {
    //   const route = useRoute();
    // //   const { postData } = route.params;
    // const postData = route.params ? route.params.postData : null; 
    // console.log(postData);
    // //   const [posts, setPosts] = useState(postData);
    // const navigation = useNavigation();

    // const handleLocationPress = ({location}) => {
    //     navigation.navigate('MapScreen',  {location} );
    // }

    return (
        <View style={styles.container}>
            <View style={styles.profileWrapper}>
                <View style={styles.avatarFlexWrapper}>
                    <View style={styles.avatarWrapper} >
                        <Image style={styles.avatar} source={UserAvatar} />
                    </View>
                    <View>
                        <Text style={styles.userName}>
                            Natali Romanova</Text>
                        <Text style={styles.userEmail}>
                            email@example.com</Text>
                    </View>
                </View>
                {postsData ? (
                    <FlatList
                        data={postsData}
                        renderItem={({ item }) => <Post post={item} showLikesIcon={false}  />}
                        // renderItem={({ item }) =>
                        // <View><Text>Тут має бути пост</Text></View>
                        //  <Post post={item} />

                        // keyExtractor={(item) => item.id}
                        style={styles.postsWrapper}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <Text>Ви не створили жодного посту!</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        flexDirection: 'column',
        paddingBottom: 40,
    },

    avatarFlexWrapper: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 32,
        alignItems: 'center',
    },

     postsWrapper:{ paddingBottom: 30,},
    userName: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '700',
        color: '#212121',
    },
    userEmail: {
        fontFamily: 'Roboto-Bold',
        fontSize: 11,
        lineHeight: 13,
        fontWeight: '400',
        color: 'rgba(33, 33, 33, 0.8)',
    },
})


export default PostsScreen;