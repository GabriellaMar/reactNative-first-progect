import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
    },

    backgoundImg: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },

    registationWraper: {
        flex: 1,
        justifyContent: 'flex-end',

    },

    formWraper: {
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 45,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFFFFF",
    },

    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        fontWeight: '500',
        lineHeight: 35,
        marginTop: 32,
        marginBottom: 32,
        // marginTop: 32,
        color: '#212121',
        textAlign: 'center',
    },

    avatarWrapper: {
        position: 'relative',
        width: 120,
        height: 120,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
        marginTop: -90,
    },

    input: {
        width: '100%',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        padding: 16,
        marginBottom: 16,
    },

    button: {
        backgroundColor: '#FF6C00',
        borderRadius: 50,
        padding: 16,
        marginBottom: 16,
    },

    buttonText: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    passwordInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        padding: 16,
        marginBottom: 43,
    },
    loginText: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
        color: '#1B4371',
    },
    showPasswordButtonText: {
        lineHeight: 18,
        fontSize: 16,
        color: '#1B4371',
    },
    pluscircleo: {
        position: 'absolute',
        top: 81,
        left: 107,
        color: '#FF6C00',
    }

});


export const loginScreenStyles = StyleSheet.create({
    ...styles,
    formWraper: {
        //   paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 111,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFFFFF",
    },
});