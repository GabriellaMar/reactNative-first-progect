import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
// import image from '../../assets/forest.jpg'

const Post = ({ post, showLikesIcon}) => {
  const {  id, title, image, comments, likes, locationName, location } = post;
  const navigation = useNavigation();

const handleLocationPress = ()=>{
  navigation.navigate('MapScreen', {location});
}

const handleCommentsPress = ()=>{
  navigation.navigate('Comments', { postId: id })
}

  return (
    <View style={styles.postwrapper}>
      <ImageBackground source={image} style={styles.imageBackground}></ImageBackground>
      <Text style={styles.postTittle}>{title}</Text>
      <View style={styles.comentsWrapper}>
        <FontAwesome name="comment" size={24} color={comments.length > 0 ? '#FF6C00' : '#BDBDBD'}  onPress={handleCommentsPress}/>
        <Text style={styles.comentAmount}>
          {comments.length.toString()}
        </Text>
        {showLikesIcon && (
          <>
            <AntDesign name="like2" size={24} color={likes > 0 ? '#FF6C00' : '#BDBDBD'} />
            <Text style={styles.comentAmount}>{likes.toString()}</Text>
          </>
        )}
        <View style={styles.locationWrapper} >
          <Feather name='map-pin' size={24} color='#BDBDBD' onPress={handleLocationPress} />
          <Text style={styles.locationTittle}onPress={handleLocationPress}>{locationName}</Text>
        </View>
      </View>
    </View>
  );
};



export default Post;

const styles = StyleSheet.create({
  postwrapper: {
   marginBottom: 32,
  },
  imageBackground: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,


  },
  postTittle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    color: '#212121',
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