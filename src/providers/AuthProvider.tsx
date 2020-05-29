import React, { useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import { getUser, createUser } from '../utility/API';

export const AuthContext = React.createContext();
export const AuthDispatchContext = React.createContext();

const initialState = null;

const reducer = (state, action) => {
	switch (action.type) {
		case `SIGN_UP`: {
			const newUser = createUser(action.payload);
			AsyncStorage.setItem(`user`, JSON.stringify(newUser));
			return (state = newUser);
		}
		case `LOG_IN`: {
			const user = getUser(action.payload);
			AsyncStorage.setItem(`user`, JSON.stringify(user));
			return (state = user);
		}
		case `LOG_OUT`: {
			AsyncStorage.removeItem(`user`);
			return (state = initialState);
		}
		default:
			throw new Error(`Bad Action Type`);
	}
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AuthContext.Provider value={state}>
			<AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	);
};
