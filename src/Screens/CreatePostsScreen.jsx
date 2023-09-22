import { View, StyleSheet, TouchableOpacity, Text, TextInput, ImageBackground } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
// import { useEffect } from "react/cjs/react.development";


const CreatePostsScreen = () => {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    // const [flashCamera, setFlashCamera] = useState(Camera.Constants.FlashMode.off);
    const [getPhoto, setGetPhoto] = useState(null);
    const [photoTittle, setPhotoTittle] = useState('');
    const [location, setLocation] = useState({});
    const [isFocusedTittleInput, setIsFocusedTittleInput] = useState(false);
    const [isFocusedLocationInput,setIsFocusedLocationInput] = useState(false);


      // ----------------Location-----------------
  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      let geocodeLocation = await Location.reverseGeocodeAsync(coords );

        const {city, region, country} = geocodeLocation[0];
        // console.log (geocodeLocation[0] )

        const getLocation = `${city}, ${region}, ${country}` 
        setLocation(getLocation)
   
   
    })();
  }, []);

    // ----camera---------
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
 

// -------------------
    const takePhoto = async () => {
     
        if (cameraRef) {
          try {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);
         
             setGetPhoto(uri );
            console.log("Зробили фото")

          } catch (error) {
            console.error('Error taking photo: ', error);
          }
        }
      }


    const handleSubmit = () =>{
    const postData = {
        description: photoTittle,
        img: getPhoto,
        comments: [],
        likes: 0,
        // address: address,
        location: location,
    }
     navigation.navigate('PostsScreen');
    console.log('Опублыкувати')
    console.log(postData)

    setGetPhoto(null);
    setPhotoTittle('');
    setLocation('');
    }

// -------Delete post--------------
const deletePost = ()=> {
    setGetPhoto(null);
    setPhotoTittle('');
     setLocation('');
     console.log('Видалили пост')
}
    
    return (
        <View style={styles.container}>

                {getPhoto || !hasPermission? (
                    <ImageBackground 
                    source={{uri: getPhoto}}
                    style={styles.img}
                    >
                        <TouchableOpacity
                            style={[styles.cameraBtn, { backgroundColor: '#FFFFFF' }]}
                            onPress={takePhoto}
                        >
                            <FontAwesome name='camera' size={24} color='#BDBDBD' style={styles.cameraIcon} />
                        </TouchableOpacity>
                    </ImageBackground>
                // </View>
                ) : ( 
                <Camera
                    style={styles.camera}
                    type={type}
                    ref={setCameraRef}
                    ratio='4:3'
                >
                    <TouchableOpacity
                        style={[styles.cameraBtn, { backgroundColor: 'rgba(255, 255, 255, 0.3)' }]}
                        onPress={takePhoto}
                    >
                        <FontAwesome name='camera' size={24} color='#FFFFFF' style={styles.cameraIcon} />
                    </TouchableOpacity>
                </Camera>

                )}

                <TouchableOpacity>
                    <Text style={styles.imageText}>
                        {getPhoto ? 'Редагувати фото' : 'Завантажте фото'}
                    </Text>
                </TouchableOpacity>
              <View style={styles.inputContainer}>
                <TextInput style={[styles.photoTittleInput, isFocusedTittleInput ? styles.focusedInput : null ]}
                onFocus = {()=>setIsFocusedTittleInput(true)}
                onBlur={() => setIsFocusedTittleInput(false)}
                    placeholder="Назва..."
                    autoCapitalize="none"
                    autoCompleteType='text'
                    name={'photoTittle'}
                    type = {'text'}
                    value={photoTittle}
                    onChangeText={setPhotoTittle}
                />
                <View style={styles.locationContainer}>
                    <TouchableOpacity style={styles.localIcon}  >
                        <Feather name='map-pin' size={24} color='#BDBDBD' />
                    </TouchableOpacity>
                    <TextInput style={[styles.locationInput, isFocusedLocationInput ? styles.focusedInput : null ]}
                     onFocus = {()=>setIsFocusedLocationInput(true)}
                     onBlur={() => setIsFocusedLocationInput(false)}
                        placeholder="Місцевість..."
                        name = {'photoLocatoin'}
                        type = {'text'}
                         value = {location}
                         onChangeText={setLocation}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={[getPhoto ? styles.postButton : styles.noPostBtn]}
                onPress={handleSubmit}
            >
                <Text style={[styles.btnText, getPhoto ? styles.postBtnText : styles.noPostBtnText]}>Опублікувати </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.deletePostBtn} 
            onPress={deletePost}
            >
                <Feather name="trash-2" size={24} color='#BDBDBD' style={styles.deleteIcon} />

            </TouchableOpacity>
        </View>
    )
}
export default CreatePostsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 31,
        marginTop: 1,
        paddingHorizontal: 16,
        paddingBottom: 34,
      },

    img: {
        display: 'flex',
        width: '100%',
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',

      
    },
    camera: {
            display: 'flex',
            width: '100%',
            height: 240,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
           
    },

    imageText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18,
        color: '#BDBDBD',
        marginTop: 8,

    },

    photoTittleInput: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 18,
        height: 50,
        borderBottomColor: '#E8E8E8',
        backgroundColor: 'white',

        //   width: '100%',
        // width: 343,
        borderBottomWidth: 1,
        marginBottom: 16,

    },
    focusedInput: {
        borderBottomColor: '#FF6C00',
    },
    locationInput: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18,
        height: 50,
        borderBottomColor: '#E8E8E8',
        backgroundColor: 'white',
        width: '100%',
        // width: 343,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingLeft: 30,
    },
    focusedLocalInput: {
        borderBottomColor: '#FF6C00',
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
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    noPostBtnText: {
        color: '#BDBDBD',
    },
    postBtnText: { 
        color: '#FFFFFF' ,
        marginLeft: 'auto',
        marginRight: 'auto',
},
    deletePostBtn: {
        // position: 'relative',
        width: 70,
        height: 40,
        backgroundColor: '#F6F6F6',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    deleteIcon: {
        position: 'absolute',
        top: 7,
        right: 22,
    },
    cameraBtn: {
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