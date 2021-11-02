import axios from 'axios';
import React, { useEffect, useState } from 'react';
import URL from '../../config';
import './Profile.css'

const Profile = () => {
	const [state, setstate] = useState([]);

	const getProfile = () => {
	
			axios
				.get(`http://localhost:8000/users/`, {
					headers: { Authorization: `Token ${localStorage.getItem('token')}` },
				})
				.then(res=>setstate(res.data));
	
	};
	useEffect(() => {
		getProfile();
		console.log(state)
	}, []);
	return (
		<div className='container'>
			<div className='mt-5 p-5 bg-light main'>
				<h1 className='head'>Profile Details</h1>

				<h3>Email: {state.email}</h3>
				<h3>Id: {state.id}</h3>
				<h3>Username: {state.username}</h3>
                <h3>Name:</h3>
                <h3>Age:</h3>
                <h3>Gender:</h3>
			</div>
		</div>
	);
};

export default Profile;
