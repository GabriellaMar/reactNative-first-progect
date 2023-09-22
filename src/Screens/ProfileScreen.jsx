import { View, ImageBackground, StyleSheet, Image, Text, Dimensions, FlatList } from "react-native";
import bgImage from "../../assets/PhotoBG.jpg";
import { HeaderBtnLogout } from "../components/HeaderBtnLogout";
import { AntDesign} from '@expo/vector-icons';
import BigUserAvatar from '../../assets/bigAvatar.jpg';
import Post from "../components/Post";
import { postsData } from "../postsData/postsData";
// import { useState } from "react";

const ProfileScreen = () => {

    return (
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

                        </View>
                    </View>
                    <Text style={styles.profileTitle}>Natali Romanova</Text>
                    <FlatList
                        data={postsData}
                        renderItem={({ item }) => <Post post={item} showLikesIcon={true}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        />
                </View>
            </View>

        </ImageBackground>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },


    flexContainer: {
        minHeight: Dimensions.get('window').height - 147,
        marginTop: 103,
        flex: 1,
        justifyContent: 'flex-end',
        

    },
    profileWrapper: {
        paddingTop: 32,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFFFFF",
        maxHeight: Dimensions.get('window').height - 157,
        marginTop: 157,
        paddingLeft: 16,
        paddingRight: 16,
        
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
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
        marginTop: -90,
        marginBottom: 32,
        marginLeft: "auto",
        marginRight: "auto",
    },
    avatarImg: {
        width: 120,
        height: 120,
        borderRadius: 16,

    },
    plusIcon: {
        position: 'absolute',
        left: 108,
        top: 80,
        backgroundColor: '#FFFFFF',
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    profileTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
        lineHeight: 35,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 32,
    },
    postwrapper: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    imgPostwrapper: {
        width: 342,
        height: 240,
        backgroundColor: '#BDBDBD',
        borderRadius: 8,
        marginBottom: 8,

    },
    comentsWrapper: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'baseline',
    },
    locationWrapper: {
        flexDirection: 'row',
        marginLeft: 'auto',
        gap: 4,
        alignItems: 'baseline',
    },
    locationTittle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '400',
        color: '#212121',
    },
    comentAmount: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '400',
        color: '#212121',
        marginRight: 24,

    },

})
export default ProfileScreen;