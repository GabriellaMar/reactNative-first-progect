import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Comment from "../components/Comment";
import { postsData } from "../postsData/postsData";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";


// const getCommentsForPost = (postId) => {
//     const post = postsData.find((post) => post.id === postId);
//     return post 
//   };

const CommentsScreen = () => {
    const route = useRoute();
    const { postId, image } = route.params;
    const [comment, setComment] = useState('');
   
    const post = postsData.find((post) => post.id === postId);

    const handleComment=()=>{

        const commentData = {
            comment: comment,
        }
        console.log(`Відсилання коменту: ${commentData.comment}`)

        setComment('')
    }
    // const image = post.image;
    return (
        <KeyboardAvoidingView style={{ flex: 1, }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        //   keyboardVerticalOffset={-70}
         >

        <View style={styles.container}>
            <View style={styles.postWrapper}>
            <ImageBackground source={image} style={styles.imageBackground}></ImageBackground>
            </View>

            <FlatList
               data={post.comments}
                renderItem={({ item }) => <Comment comment={item} />}

                keyExtractor={(item) => item.id.toString()}
                style={styles.comment}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.inputFlexWrapper}>
                <TextInput
                    style={styles.commentInput}
                    placeholder="Коментувати..."
                    name={'comment'}
                    type={'text'}
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity style={styles.commentBtn}
                onPress={handleComment}
                >
                    <AntDesign name="arrowup" size={17} color="white" style={styles.iconBtn} />
                </TouchableOpacity>
            </View>
            
        </View>
        </KeyboardAvoidingView>
        )
}
export default CommentsScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
        padding: 16,
        gap: 32,
        

    },
    postWrapper: {
        width: '100%',

        height: 240,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#BDBDBD',
        // marginTop: 300,
        // paddingVertical: 50,
    },
    commentswrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    commentBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 40,
        height: 40,
        backgroundColor: '#FF6C00',
        borderRadius: 50,


    },
    commentInput: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 19,
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 50,
        width: 343,

    },

    comment: {
        // display: 'flex',
        // flexDirection: 'column',
        // gap: 24,
        // marginBottom: 24,
    },
    inputFlexWrapper: {
        position: 'relative',

    },
    iconBtn: {
        position: 'absolute',
        top: 11,
        left: 11,
    
    },

})