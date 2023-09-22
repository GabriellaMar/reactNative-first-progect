import { View, Text, StyleSheet, Image } from "react-native"
import smallUserAvatar from '../../assets/commentAvatar.jpg';

const Comment = ({ comment }) => {
    return (
        <View style={styles.container}>
            <View style={styles.commentContainer}>
                <Image style={styles.avatarImg} source={comment.useravatar} />

                <View style={styles.textWrapper}>
                    <Text style={styles.commentText}>{comment.commentText}</Text>
                    <Text style={styles.commentDate}>{comment.commentDate}</Text>
                </View>
            </View>
        </View>
    )
}

export default Comment;
const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flexDirection: 'column',

        // gap: 10,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        width: '100%',
        marginBottom: 24,
    },
    commentText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 18,
        marginBottom: 8,
        color: '#212121',
        //  borderEndStartRadius: 10,
    },
    commentDate: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 12,
        color: '#BDBDBD',
        // backgroundColor: '#BDBDBD',
    },
    textWrapper: {
        width: 299,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
         borderBottomLeftRadius: 6,
         borderBottomRightRadius: 6,
         padding: 16,
         maxHeight: 100, 
         overflow: 'hidden',
       
    },
    avatarImg:{
        width: 30,
        height: 30,
        borderRadius: 50,
    }
})