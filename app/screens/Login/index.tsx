import * as EmailValidator from 'email-validator';
import * as React from 'react';

import { Alert, BackHandler, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import styles from "./styles"
import { useAuthorization } from '../../stores/AuthStore';
import { useUserStore } from '../../stores/UserStore';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { users } = useUserStore();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    const CreateAccount = ({ navigation }) => {
        function navigateHome() {
            navigation.replace('SignUp');
        }
        return <Text onPress={navigateHome}>Create account</Text>;
    };

    const SignIn = ({ navigation }) => {
        const { signIn } = useAuthorization();
        function navigateHome() {
            if (users.find(el => el.email === email.email && el.password === password.password) && EmailValidator.validate(email.email) == true) {
                signIn("my_token");
                navigation.replace('Auth');
                emailInput.clear()
                passInput.clear()
                setEmail("")
                setPassword("")
            } else {
                Alert.alert(
                    "Error",
                    "Password or email invalid",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

        }
        return <Button title="Sign in" onPress={navigateHome} />;
    };

    return (

        <View style={styles.container}>

            <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/tmdb.png')}
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
                <SignIn {...props} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountLink}>
                <CreateAccount {...props} />
            </TouchableOpacity>
        </View>
    );
};

export default Login;