import React, { useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import { getUser, createUser } from '../services/API';

export const AuthContext = React.createContext(null);
export const AuthDispatchContext = React.createContext(null);

export interface User {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
}

enum AuthTypes {
	SIGN_UP = `SIGN_UP`,
	LOG_IN = `LOG_IN`,
	LOG_OUT = `LOG_OUT`,
}

interface Action {
	type: AuthTypes;
	payload: User;
}

const initialState = { first_name: ``, last_name: ``, email: ``, password: `` };

const reducer = (state: User, action: Action) => {
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
