import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CirclesStack } from './stacks/CirclesStack/CircleStack';
import { CalendarStack } from './stacks/CalendarStack/CalendarStack';
import { ConnectionsStack } from './stacks/ConnectionsStack/ConnectionsStack';
import { ProfileStack } from './stacks/ProfileStack/ProfileStack';
import { DeviceContext } from './providers/DeviceProvider';

import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

export const MainNavigator = () => {
	const deviceInfo = useContext(DeviceContext);

	return (
		<BottomTabs.Navigator
			initialRouteName='Profile'
			tabBarOptions={{
				activeTintColor: deviceInfo.colorScheme.primaryColor,
			}}
		>
			<BottomTabs.Screen
				name='Profile'
				component={ProfileStack}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => <Octicons name='person' size={28} color={color} />,
				}}
			/>
			<BottomTabs.Screen
				name='Circles'
				component={CirclesStack}
				options={{
					tabBarLabel: 'Circles',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name='google-circles-extended' size={28} color={color} />,
				}}
			/>
			<BottomTabs.Screen
				name='Connections'
				component={ConnectionsStack}
				options={{
					tabBarLabel: 'Connections',
					tabBarIcon: ({ color }) => <Ionicons name='ios-people' size={34} color={color} />,
				}}
			/>
			<BottomTabs.Screen
				name='Calendar'
				component={CalendarStack}
				options={{
					tabBarLabel: 'Calendar',
					tabBarIcon: ({ color }) => <Octicons name='calendar' size={26} color={color} />,
				}}
			/>
		</BottomTabs.Navigator>
	);
}
