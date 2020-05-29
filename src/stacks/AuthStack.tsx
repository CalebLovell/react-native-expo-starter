import React from 'react';
import { SignupScreen } from './screens/SignupScreen';
import { LoginScreen } from './screens/LoginScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => null,
			}}
		>
			<Stack.Screen name='Signup' component={SignupScreen} />
			<Stack.Screen name='Login' component={LoginScreen} />
		</Stack.Navigator>
	);
};
