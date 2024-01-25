import React, { useState, useEffect, useReducer } from 'react'
import UserMenu from './UserMenu';
import GuestMenu from './GuestMenu';

export const Logged = ({logged}) => {
	const [isLogged, setIsLogged] = useState(false);
	useEffect(()=>{
	setIsLogged(logged)
	}, [])
	useReducer
	return isLogged ? <UserMenu /> : <GuestMenu />;
}
