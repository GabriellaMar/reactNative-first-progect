import { View, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native"


const CreatePostsScreen = () => {
    return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <View style={styles.img}>

            </View>
            <TouchableOpacity
            >
                <Text style={styles.imageText}>Завантажити фото
                    {/* {postPhoto ? 'Редагувати фото' : 'Завантажте фото'} */}
                </Text>
            </TouchableOpacity>

        </View>

        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder="Назва..."
            autoCapitalize="none"
            autoCompleteType='text'
            name={'photo'}
            ></TextInput>
            <TextInput style={styles.input}
            placeholder="Місцевість..."
            ></TextInput>
        </View>

        <TouchableOpacity style={styles.postButton}
            >
                <Text style={styles.btnText}>Опублікувати
                    {/* {postPhoto ? 'Редагувати фото' : 'Завантажте фото'} */}
                </Text>
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
    },
    imageText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18,
        color: '#BDBDBD',
        marginTop: 8,

    },
    imgContainer:{
        marginBottom: 32,
    },

    input:{
       height: 50,
       borderBottomColor: '#E8E8E8',
      backgroundColor: 'white',
    //   width: '100%',
      width: 343,
      borderBottomWidth: 1,
    // borderRadius: 10,
    marginBottom: 16,

    },
    postButton: {
        borderRadius: 50,
        paddingHorizontal: 120,
        paddingVertical: 16,
        marginTop: 16,
        backgroundColor: '#F6F6F6',
    },
    btnText:{
        color: '#BDBDBD',
    }
});