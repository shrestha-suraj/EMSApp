import React from 'react'
import { View, Text, ImageBackground, StyleSheet,Linking } from 'react-native'
import background from '../assets/home.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = (props) => {
    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <View style={styles.bodyView}>
                <TouchableOpacity style={styles.buttons} onPress={()=>{
                    props.navigation.navigate('GPS Track')
                }}>
                    <Ionicons name="ios-compass" size={25} color="white" style={{marginRight:15}}/>
                    <Text style={{ fontSize: 30, color: "white" }}>Use Gps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={()=>{
                    props.navigation.navigate('Mielage')
                }}>
                    <Ionicons name="md-car" size={25} color="white" style={{marginRight:15}}/>
                    <Text style={{ fontSize: 30, color: "white" }}>Mielage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={()=>{
                    Linking.openURL('http://wwpems.com')
                }}>
                    <Ionicons name="md-globe" size={25} color="white" style={{marginRight:15}}/>
                    <Text style={{ fontSize: 30, color: "white" }}>Website</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyView: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: "#008CBA",
        width: 250,
        maxWidth: "90%",
        alignItems: "center",
        justifyContent:"center",
        paddingVertical: 5,
        borderRadius: 10,
        flexDirection:"row",
        marginBottom:30
    }
})


export default HomeScreen