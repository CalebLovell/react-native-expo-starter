import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AuthDispatchContext } from '../../../providers/AuthProvider';
import { DeviceContext } from '../../../providers/DeviceProvider';

export const LoginScreen = ({ navigation }) => {
	const [name, setName] = useState(``);
	const [email, setEmail] = useState(``);
	const [password, setPassword] = useState(``);

	const dispatchAuth = useContext(AuthDispatchContext);
	const deviceInfo = useContext(DeviceContext);

	const login = () => {
		const existingUser = {
			name,
			email,
			password,
		};
		dispatchAuth({ type: 'LOG_IN', payload: existingUser });
	};

	return (
		<View style={styles.screen}>
			<View></View>
			<View style={styles.form}>
				<Text style={[styles.title, { color: deviceInfo.colorScheme.primaryColor }]}>Login</Text>
				<TextInput style={styles.input} onChangeText={t => setName(t)} value={name} placeholder={`Name`} />
				<TextInput style={styles.input} onChangeText={t => setEmail(t)} value={email} placeholder={`Email`} />
				<TextInput style={styles.input} onChangeText={t => setPassword(t)} value={password} placeholder={`Password`} />
				<TouchableOpacity style={[styles.button, { backgroundColor: deviceInfo.colorScheme.primaryColor }]} onPress={login}>
					<Text style={[styles.text, { color: deviceInfo.colorScheme.secondaryColor }]}>Submit</Text>
				</TouchableOpacity>
			</View>
			<Text style={[styles.text, { color: deviceInfo.colorScheme.primaryColor, marginBottom: 20 }]} onPress={() => navigation.navigate(`Signup`)}>
				Don't have an account?
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	form: {
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 34,
		marginBottom: 10,
	},
	text: {
		fontSize: 18,
	},
	input: {
		height: 40,
		width: '100%',
		marginBottom: 10,
		borderColor: 'gray',
		borderWidth: 1,
	},
	button: {
		height: 40,
		width: 100,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
});
