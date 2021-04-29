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
        signIn();
        navigation.navigate('Auth');
    };

    const SignIn = ({ navigation }) => {
        const { signIn } = useAuthorization();

        if (email == "olserra@gmail.com" && password == "qweasd") {
            signIn();
            navigation.navigate('Auth');
        } else {
            return (
                <View style={styles.containerDialog}>
                    <Button title="Show dialog" onPress={showDialog} />
                    <Dialog.Container visible={visible}>
                        <Dialog.Title>Account delete</Dialog.Title>
                        <Dialog.Description>
                            Email or password invalid. Please try again.
                        </Dialog.Description>
                        <Dialog.Button label="Ok" onPress={handleDialog} />
                    </Dialog.Container>
                </View>
            );
        }
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
                <Button title="Sign In" style={styles.submitButtonText} onPress={() => SignIn({ ...props })} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton}>
                <Button title="Create Account" onPress={() => CreateAccount({ ...props })} style={styles.submitButtonText} />
            </TouchableOpacity>

            <View style={styles.actions}>

            </View>
        </View>
    );
};

export default Login;