import { View, ImageBackground, StyleSheet, ScrollView, Image, Text } from "react-native";
import bgImage from "../../assets/PhotoBG.jpg";
import { HeaderBtnLogout } from "../components/HeaderBtnLogout";
import { AntDesign, Entypo } from '@expo/vector-icons';
import BigUserAvatar from '../../assets/bigAvatar.jpg';

const ProfileScreen = () => {
    return (
    
                <View style={styles.container}>
                     <ImageBackground style={styles.backgoundImg} source={bgImage}>
                <View style={styles.flexContainer}>
                    <View style={styles.profileWrapper}>
                    <View style={styles.logOutIcon}>
                        <HeaderBtnLogout />
                    </View>
                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatarImg} source={BigUserAvatar} />

                        <View style={styles.plusIcon}>
                            <AntDesign
                                name="closecircleo"
                                size={25}
                                color="#E8E8E8"
                            />
                            {/* <Entypo name="circle-with-cross" size={24} color="black" /> */}
                        </View>
                    </View>
                    <Text style={styles.profileTitle}>Natali Romanova</Text>
                </View>
            </View>
        </ImageBackground>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      },


      flexContainer:{
        flex: 1,
        justifyContent: 'flex-end',

    },
    profileWrapper: {
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 62,
        //  paddingBottom: 45,
          // marginBottom: 30,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFFFFF",
      },

    backgoundImg: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    logOutIcon: {
        position: 'absolute',
        top: 22,
        right: 16,
    },
    avatarWrapper: {
        position: 'relative',
        width: 120,
        height:120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
        marginTop: -90,
        marginBottom: 32,
        marginLeft: "auto",
        marginRight: "auto",
    },
    avatarImg:{
        width: 120,
        height:120,
        borderRadius: 16,
        // marginLeft: "auto",
        // marginRight: "auto",

    },
    plusIcon:{
        position: 'absolute',
        right: 108,
        top: 80,
        backgroundColor: '#FFFFFF',
        width: 25,
        height:25,
        borderRadius: 50,
},
profileTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '500',
    textAlign: 'center',
},

})
export default ProfileScreen;