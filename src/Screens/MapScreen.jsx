import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Marker } from "react-native-maps";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// AIzaSyCpe5zjQd2vFZfK8PFcZpyyZmuUZqcqFHQ
// SHA_1= 9C:46:CD:F3:1B:72:51:DF:23:60:28:F4:A3:14:C2:62:B4:0A:7E:1B
//  const URL_DB = https://savvy-concord-399617-default-rtdb.firebaseio.com/



const MapScreen = ({location}) => {
    console.log('Location in MapScreen:', location);
    return (
        <View style={styles.container} >
            <MapView
                style={styles.mapStyle}
                provider={PROVIDER_GOOGLE}
                mapType='terrain'
                minZoomLevel={0}
                region={{
              
                     latitude: 46.1173,
                     longitude: 32.9207,
                     latitudeDelta: 5,
                     longitudeDelta: 5,
                }}
                // region={{
                //         // latitude: location.latitude,
                //         // longitude: location.longitude,
                //         // latitudeDelta: location.latitudeDelta,
                //         // longitudeDelta: location.longitudeDelta,
                // }}
                showsUserLocation={true}
            >
                <Marker
                  coordinate={{
                    latitude: 46.1173,
                    longitude: 32.9207,
                }}
                    // coordinate={{
                    //     latitude: location.latitude,
                    //     longitude: location.longitude,
                    // }}
                    description=''
                />
            </MapView>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: '100%',
        height: '100%',
    },
});
