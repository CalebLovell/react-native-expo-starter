import React, { useState, useEffect, useContext } from 'react';
import { AuthContext, AuthDispatchContext } from './providers/AuthProvider';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './MainNavigator';
import { AuthStack } from './stacks/AuthStack/AuthStack';
import { SplashScreen } from './stacks/SharedScreens/SplashScreen';

export const Routes = () => {
	const user = useContext(AuthContext);
	const dispatchAuth = useContext(AuthDispatchContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkForUser();
	}, []);

	const checkForUser = async () => {
		try {
			const oldUser = JSON.parse(await AsyncStorage.getItem(`user`));
			if (oldUser) {
				dispatchAuth({ type: `LOG_IN`, payload: oldUser });
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <SplashScreen size='large' />;
	} else {
		return <NavigationContainer>{user ? <MainNavigator /> : <AuthStack />}</NavigationContainer>;
	}
};
