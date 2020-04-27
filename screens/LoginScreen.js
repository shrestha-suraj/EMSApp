import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import background from '../assets/login.jpg'

const LoginScreen = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginMessage, setLoginMessage] = useState('')

    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <View style={styles.bodyView}>
                <View style={styles.mainContainer}>
                    <Text style={{ color: 'white', fontSize: 40 }}>Login</Text>
                    <TextInput
                        autoFocus={true}
                        placeholder='Email Address'
                        textContentType='emailAddress'
                        secureTextEntry={false}
                        style={styles.input}
                        onChangeText={(value) => setEmail(value)}
                        value={email}
                        required={true}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder='Password'
                        textContentType='password'
                        secureTextEntry={true}
                        style={{ ...styles.input }}
                        onChangeText={(value) => setPassword(value)}
                        value={password}
                        autoCapitalize='none'
                    />
                    <Text style={{ color: 'white', marginBottom: 10 }}>
                        {loginMessage}
                    </Text>
                    <Text style={{ color: 'blue' }}>
                        Forgot Password
                    </Text>
                    <TouchableOpacity style={styles.buttonContainer} 
                    onPress={()=>{
                        props.navigation.reset({index: 0,routes: [{ name: 'Home' }]})
                    }} >
                        <Text style={{ color: "white" }}>Log In</Text>
                    </TouchableOpacity>
                </View>
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
    mainContainer: {
        width: 300,
        maxWidth: '90%',
        padding: 20,
        backgroundColor: '#69c0ff',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 1,
        shadowOpacity: 0.26,
        elevation: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        width: '80%',
        marginVertical: 20,
        backgroundColor: "#008CBA",
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5
    },
    button: {
        width: 80,
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    input: {
        padding: 10,
        width: '80%',
        backgroundColor: 'white',
        color: 'black',
        marginVertical: 5,
        borderRadius: 5
    }
})

export default LoginScreen