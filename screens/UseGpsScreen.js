import React, { useState } from 'react'
import { View, Animated, Easing, Text, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {getDistance} from 'geolib'

const UseGpsScreen = (props) => {
    const [spinValue, setSpinValue] = useState(new Animated.Value(0))
    const [spinning, setSpinning] = useState(false)
    const [startingLocation, setStartingLocation] = useState()
    const [endingLocation, setEndingLocation] = useState()
    const [miles, setMiles] = useState(0)

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const startMielage = () => {
        setEndingLocation()
        setMiles(0)
        setSpinning(true)
        navigator.geolocation.getCurrentPosition(
            position => {
                setStartingLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        Animated.loop(
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear
                }
            )
        ).start();
    }
    const stopMielage = () => {
        setSpinning(false)
        Animated.loop(
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear
                }
            )
        ).stop()
        navigator.geolocation.getCurrentPosition(
            position => {
                setEndingLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                let distance = getDistance({
                    latitude: startingLocation.latitude,
                    longitude: startingLocation.longitude
                }, {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                distance = distance / 1609.34
                setMiles(distance.toFixed(2))
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    const clearData = () => {
        Alert.alert(
            'Canel Tracking',
            'Are you sure? Current tracking data will be lost.',
            [
                {
                    text: 'Yes', onPress: () => {
                        setStartingLocation()
                        setEndingLocation()
                        setSpinning(false)
                        Animated.loop(
                            Animated.timing(
                                spinValue,
                                {
                                    toValue: 1,
                                    duration: 5000,
                                    easing: Easing.linear
                                }
                            )
                        ).stop()
                    }
                },
                {
                    text: 'Cancel', onPress: () => { return }
                }
            ],
            { cancelable: false }
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center' }}>
            <Animated.Image
                style={{ transform: [{ rotate: spin }], width: 300, height: 300 }}
                source={require("../assets/tyre.png")} />
            <TouchableOpacity onPress={!spinning ? startMielage : stopMielage} style={{ ...styles.button, width: 300 }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>{!spinning ? "Start Trackig" : "Stop Tracking"}</Text>
            </TouchableOpacity>
            <View style={{ ...styles.trackView }}>
                <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                    <Text style={{ ...styles.trackText }}>Starting Status: {!startingLocation ? "IDLE" : "SUCCESS"}</Text>
                    <Text style={{ ...styles.trackText }}>Stoping Status: {!endingLocation ? "IDLE" : "SUCCESS"}</Text>
                    <Text style={{ ...styles.trackText }}>Your Mileage: {miles} miles</Text>
                </View>
                <TouchableOpacity style={{ ...styles.button, width: 300, marginBottom: 0 }}
                    onPress={()=>{Alert.alert("This button should save data in database")}}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Save Record</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, width: 300, marginBottom: 0, backgroundColor: "red" }} onPress={clearData}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Clear Entry</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#008CBA",
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    trackView: {
        width: 300,
        height: 300,
        backgroundColor: "#d9d9d9",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 1,
        shadowOpacity: 0.26,
        elevation: 10,
    },
    trackText: {
        color: "black",
        fontWeight: "bold"
    }
})

export default UseGpsScreen