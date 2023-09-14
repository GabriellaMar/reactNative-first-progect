import { View, StyleSheet, TouchableOpacity, Text, TextInput, ImageBackground } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useState } from "react";


const CreatePostsScreen = () => {
    const [downloadPhoto, setDownloadPhoto] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <View style={styles.img}>
                    <ImageBackground>
                        <TouchableOpacity
                            style={styles.cameraBtn}>
                            <FontAwesome name='camera' size={24} color='#BDBDBD' style={styles.cameraIcon} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <TouchableOpacity>
                    <Text style={styles.imageText}>
                        {downloadPhoto ? 'Редагувати фото' : 'Завантажте фото'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Назва..."
                    autoCapitalize="none"
                    autoCompleteType='text'
                    name={'photo'}
                />
                <View style={styles.locationContainer}>
                    <TouchableOpacity style={styles.localIcon}  >
                        <Feather name='map-pin' size={24} color='#BDBDBD' />
                    </TouchableOpacity>
                    <TextInput style={styles.localInput}
                        placeholder="Місцевість..."
                    />
                </View>
            </View>

            <TouchableOpacity
                // style={styles.postButton}
            style={[downloadPhoto ? styles.postButton : styles.noPostBtn]}
         
            >
                <Text style={[styles.btnText, downloadPhoto ? styles.postBtnText : styles.noPostBtnText]}>Опублікувати </Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.deletePostBtn} >
                <Feather name="trash-2" size={24} color='#BDBDBD' style={styles.deleteIcon} />

            </TouchableOpacity>
        </View>
    )
}
export default CreatePostsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 32,

    },
    img: {
        width: 343,
        height: 240,
        backgroundColor: '#E8E8E8',
        borderRadius: 8,
    },
    imageText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18,
        color: '#BDBDBD',
        marginTop: 8,

    },
    imgContainer: {
        marginBottom: 32,
       
    },

    input: {
        height: 50,
        borderBottomColor: '#E8E8E8',
        backgroundColor: 'white',
        //   width: '100%',
        width: 343,
        borderBottomWidth: 1,
        marginBottom: 16,

    },
    localInput: {
        height: 50,
        borderBottomColor: '#E8E8E8',
        backgroundColor: 'white',
        //   width: '100%',
        width: 343,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingLeft: 30,
    },
    postButton: {
        borderRadius: 50,
        paddingHorizontal: 120,
        paddingVertical: 16,
        marginTop: 16,
        backgroundColor: '#FF6C00',
    },
    noPostBtn: {
        borderRadius: 50,
        paddingHorizontal: 120,
        paddingVertical: 16,
        marginTop: 16,
        backgroundColor: '#F6F6F6',
    },
    noPostBtnText: {
        color: '#BDBDBD',
    },
    postBtnText: {color: '#FFFFFF'},
    deletePostBtn: {
        position: 'relative',
        width: 70,
        height: 40,
        backgroundColor: '#F6F6F6',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 'auto',
    },
    deleteIcon: {
        position: 'absolute',
        top: 7,
        right: 22,
    },
    cameraBtn: {
        position: 'relative',
        top: 90,
        left: 140,
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,

    },
    cameraIcon: {
        position: "absolute",
        top: 12,
        left: 12,
    },
    locationContainer: {
        position: 'relative',
        // flex: 1,
        flexDirection: 'row',
        gap: 5,
    },
    localIcon: {
        position: 'absolute',
        top: 9,
        zIndex: 2,
    },

});