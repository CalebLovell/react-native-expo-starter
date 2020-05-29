import React, { useState, useEffect } from 'react';
import { ColorScheme } from '../utility/ColorScheme';

export const DeviceContext = React.createContext();
export const DeviceDispatchContext = React.createContext();

export const DeviceProvider = ({ children }) => {
	const [deviceInfo, setDeviceInfo] = useState({});

	const getDeviceInfo = () => {
		// Dark Mode Example Check
		const determineColorScheme = () => {
			const num = Math.round(Math.random());
			return num ? ColorScheme.lightMode : ColorScheme.darkMode;
		};
		setDeviceInfo({
			colorScheme: determineColorScheme(),
		});
	};

	useEffect(() => {
		getDeviceInfo();
	}, []);

	return (
		<DeviceContext.Provider value={deviceInfo}>
			<DeviceDispatchContext.Provider value={setDeviceInfo}>{children}</DeviceDispatchContext.Provider>
		</DeviceContext.Provider>
	);
};
