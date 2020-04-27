import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Alert,ImageBackground } from 'react-native'
import {getDistance} from 'geolib'
import background from '../images/startstop.jpg'

const StartStop = ({ navigation }) => {

    const [StartBtn, setStartBtn] = useState(true)
    const [StartLocation, setStartLocation] = useState([])
    const [EndLocation, setEndLocation] = useState([])
    const [DistanceTravelled, setDistanceTravelled] = useState({})

    const startHandler = () => {
        //Get user start location
        navigator.geolocation.getCurrentPosition(
            position => {
                setStartLocation([position.coords.latitude,position.coords.longitude])
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )



        setStartBtn(false)
    }
    const stopHandler = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setEndLocation([position.coords.latitude,position.coords.longitude])
                let distance=getDistance({
                    latitude: StartLocation[0],
                    longitude: StartLocation[1]
                },{
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude  
                },accuracy=1)
                distance=distance/1609.34
                setDistanceTravelled({distance:distance.toFixed(2)})
        
                setStartBtn(true)
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
            opacity: 10
        },
        mainScreen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        myButton: {
            width: 200,
            height: 200,
            backgroundColor: 'green',
            borderRadius: 100,
            borderColor: '#1890ff',
            borderWidth: 10,
            justifyContent: 'center',
            alignItems: 'center',
            margin:30
        },
        buttonText: {
            color: '#fa541c',
            fontSize: 40
        }
    })

    return (
        <ImageBackground style={styles.background}
            source={background}
        >
        <View style={styles.mainScreen}>
            <Text>
                Start Latitude:{StartLocation[0]}
            </Text>
            <Text>
                Start Longitude:{StartLocation[1]}
            </Text>
            {StartBtn ? <TouchableOpacity style={styles.myButton}
                activeOpacity={0.8}
                onPress={startHandler}
            >
                <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity> :
                <TouchableOpacity style={styles.myButton}
                    activeOpacity={0.8}
                    onPress={stopHandler}
                >
                    <Text style={styles.buttonText}>STOP</Text>
                </TouchableOpacity>
            }

            <Text>
                End Latitude:{EndLocation[0]}
            </Text>
            <Text>
                End Longitude:{EndLocation[1]}
            </Text>
            <View style={{height:50}}></View>
            <Text style={{color:'red',fontSize:20}}>
                Distance:
                {DistanceTravelled.distance?`${DistanceTravelled.distance } miles` : `Loading`}
            </Text>
        </View>
        </ImageBackground>
    )
}
export default StartStop