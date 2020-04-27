import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'



const MielageScreen = () => {

    const data = [
    { time: 20, date: "11/12/2019", miles: 50 },
    { time: 50, date: "15/12/2019", miles: 180 },
    { time: 5, date: "18/12/2019", miles: 10 },
    { time: 20, date: "11/12/2019", miles: 50 },
    { time: 50, date: "15/12/2019", miles: 180 },
    { time: 5, date: "18/12/2019", miles: 10 },
    { time: 20, date: "11/12/2019", miles: 50 },
    { time: 50, date: "15/12/2019", miles: 180 },
    { time: 5, date: "18/12/2019", miles: 10 }]

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
            <Text style={{ fontSize: 25 }}>Your Miles History</Text>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                {data.map((eachData, index) =>
                    <View key={index} style={{
                        width: 350, maxWidth: "90%",
                        backgroundColor: "red",
                        marginVertical: 10, borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        paddingVertical: 20
                    }}>
                        <Text style={{ ...styles.recordText }}>Record Date: {eachData.date}</Text>
                        <Text style={{ ...styles.recordText }}>Time of Travel: {eachData.time} mins</Text>
                        <Text style={{ ...styles.recordText }}>Miles Travelled: {eachData.miles} miles</Text>

                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    recordText: {
        color: "white"
    }
})

export default MielageScreen