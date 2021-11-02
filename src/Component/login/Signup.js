import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import URL from '../../config';

const Signup = () => {
    const [user,setUser]=useState({})

    const handleSubmit = (event) => {
			event.preventDefault();
			axios
				.post(`${URL}/users/`, user)
				.then((res) => localStorage.setItem('token', res.data.auth_token));
		};

		const handleChange = (event) => {
			setUser({ ...user, [event.target.id]: event.target.value });
		};
    return (
			<div>
				<Form className='singupform'>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={handleChange}
							type='email'
							placeholder='Enter email'
						/>
						
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={handleChange}
							type='password'
							placeholder='Password'
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Sign up
					</Button>
				</Form>
			</div>
		);
};

export default Signup;