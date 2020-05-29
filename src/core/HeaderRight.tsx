import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const HeaderRight = () => {
	return (
		<View style={{ marginRight: 10 }}>
			<Feather name='menu' size={30} color='gray' />
		</View>
	);
};
