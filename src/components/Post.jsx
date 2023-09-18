import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
// import image from '../../assets/forest.jpg'

const Post = ({ post }) => {
  const { title, image, comments, likes } = post;

  return (
    <View style={styles.postwrapper}>
      <ImageBackground source={image} style={styles.imageBackground}></ImageBackground>
      <Text style={styles.postTittle}>{title}</Text>
      <View style={styles.comentsWrapper}>
        <FontAwesome name="comment" size={24} color={comments.length > 0 ? '#FF6C00' : '#BDBDBD'} />
        <Text style={styles.comentAmount}>
          {comments.length.toString()}
        </Text>
        <AntDesign name="like2" size={24} color={likes > 0 ? '#FF6C00' : '#BDBDBD'} />
        <Text style={styles.comentAmount}>{likes.toString()}</Text>
        <View style={styles.locationWrapper}>
          <Feather name='map-pin' size={24} color='#BDBDBD' />
          <Text style={styles.locationTittle}>локація</Text>
        </View>
      </View>
    </View>
  );
};



export default Post;

const styles = StyleSheet.create({
  postwrapper: {
    paddingLeft: 16,
    paddingRight: 16,
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