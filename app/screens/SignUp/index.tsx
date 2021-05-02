import * as React from 'react';

import { Alert, BackHandler, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import styles from "./styles"
import { useAuthorization } from '../../stores/AuthStore';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    const SignIn = ({ navigation }) => {
        function navigateHome() {
            navigation.replace('Login');
        }
        return <Text onPress={navigateHome}>Log in</Text>;
    };

    const SignUp = ({ navigation }) => {
        const { signIn } = useAuthorization();
        function navigateHome() {
            if (email.email == "" && password.password == "" && firstName.firstName == "" && lastName.lastName == "") {
                Alert.alert(
                    "Error",
                    "Password or email invalid",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            } else {
                signIn("my_token");
                navigation.replace('Auth');
            }
        }
        return <Button title="Sign up" onPress={navigateHome} />;
    };

    return (

        <View style={styles.container}>

            <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/tmdb.png')}
            />
            <TextInput
                ref={input => { firstNameInput = input }}
                style={styles.input}
                onChangeText={(firstName) => setFirstName({ firstName })}
                placeholder="First name"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
            />
            <TextInput
                ref={input => { lastNameInput = input }}
                style={styles.input}
                onChangeText={(lastName) => setLastName({ lastName })}
                placeholder="LastName"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
            />
            <TextInput
                ref={input => { emailInput = input }}
                style={styles.input}
                onChangeText={(email) => setEmail({ email })}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
            />

            <TextInput
                ref={input => { passInput = input }}
                style={styles.input}
                onChangeText={(password) => setPassword({ password })}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.submitButton}>
                <SignUp {...props} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInLink}>
                <SignIn {...props} />
            </TouchableOpacity>
        </View>
    );
};

export default Login;