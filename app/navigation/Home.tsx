import * as React from 'react';

import Login from "../screens/Login/index"
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from "../navigation/NavigationStack"
import SignUp from "../screens/SignUp/index"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Auth" component={NavigationStack} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Home;