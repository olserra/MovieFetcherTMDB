import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function Login({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    const onSubmit = async () => {
        await AsyncStorage.setItem('token', username)
        if (username === 'anthony' && password === '123456') {
            navigation.navigate('Home')
        }
    }

    const tokenlogin = async () => {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            navigation.navigate('Home')
        }
    }

    tokenlogin()

    return (
        <View style={styles.container}>
            <TextInput onChangeText={(value) => setUsername(value)} placeholder="Username" />
            <TextInput secureTextEntry onChangeText={(value) => setPassword(value)} placeholder="Password" />
            <Button onPress={onSubmit} title="LogIn" />
        </View>
    );
}

