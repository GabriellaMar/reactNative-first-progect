import { View, StyleSheet, Text } from "react-native";
 export const HeaderTittle =({tittle})=>{
    return (
      <Text style={styles.headerTittle}>{tittle}</Text>
    )
}

const styles = StyleSheet.create({
    headerTittle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        color: '#212121',
    }
})
