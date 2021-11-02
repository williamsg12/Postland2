import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import URL from '../../config';

const Signup = () => {
    const [user,setUser]=useState({})

    const handleSubmit = (event) => {
			event.preventDefault();
			axios.post(`${URL}/users/`, user)
			.then(console.log(user))
				
		}

		const handleChange = (event) => {
			setUser({ ...user, [event.target.name]: event.target.value });
		};
    return (
			<div>
				<Form onSubmit={handleSubmit} className='singupform'>
					<Form.Group className='mb-3' controlId='formBasicUsername'>
						<Form.Label>Usernane</Form.Label>
						<Form.Control
							onChange={handleChange}
							type='username'
							placeholder='Enter username'
							name='username'
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={handleChange}
							type='email'
							placeholder='Enter email'
							name='email'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={handleChange}
							type='password'
							placeholder='Password'
							name='password'
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Enter Password Again</Form.Label>
						<Form.Control
							onChange={handleChange}
							type='re_password'
							placeholder='Password'
							name='re_password'
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