import * as React from 'react';

import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Dialog from "react-native-dialog";
import styles from "./Styles"
import { useAuthorization } from '../../providers/AuthProvider';
import { useState } from 'react';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleDialog = () => {
        setVisible(false);
    };


    const CreateAccount = ({ navigation }) => {
        const { signIn } = useAuthorization();
        function navigateHome() {
            signIn('my_token');
            navigation.navigate('Auth');
        }
        return <Button title="Create Account" onPress={navigateHome} />;
    };

    const SignIn = ({ navigation }) => {
        const { signIn } = useAuthorization();
        function navigateHome() {
            if (email == "o@o.com" && password == "123") {
                signIn();
                navigation.navigate('Auth');
            }
        }
        return <Button title="Sign IN" onPress={navigateHome} />;
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail({ email })}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
            />

            <TextInput
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

            <TouchableOpacity style={styles.submitButton}>
                <CreateAccount {...props} />
            </TouchableOpacity>
        </View>
    );
};

export default Login;