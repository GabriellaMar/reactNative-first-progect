import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
// import image from '../../assets/forest.jpg'

const Post = ({ post }) => {
  const { title, image, comments, likes } = post;

  return (
    <View style={styles.postwrapper}>
      <View style={styles.imgPostwrapper}>
        <ImageBackground source={image} style={styles.imageBackground}></ImageBackground>
      </View>
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
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
  },
  imgPostwrapper: {
    position: 'relative',
    width: 342,
    height: 240,
    backgroundColor: '#BDBDBD',
    borderRadius: 8,
    marginBottom: 8,

  },
  imageBackground: {
    width: 342,
    height: 240,
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
    // flex:1,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'baseline',
    // justifyContent: 'space-between',
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