import axios from 'axios';
import React, { useState } from 'react';
import { Form, Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Login = ({setLoggedIn}) => {

	const [person,setperson]=useState({})
	let history=useHistory()

	const handleSubmit = (event)=>{
		event.preventDefault()
		axios
			.post(`${URL}/token/login`, person, {
				headers: `Token edc4bbb1a9cff37eec56e3df24c42d6fa9263dce`,
			})
			.then((res) => localStorage.setItem('token', res.data.auth_token));
		setLoggedIn(true)
		history.push('/')
	}

	const handleChange = (event)=>{
		setperson({...person,[event.target.id]:event.target.value})
	}

	return (
		<div>
			<Card>
				<Card.Header>Featured</Card.Header>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' id='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={handleChange}
							id='email'
							type='email'
							placeholder='Enter email'
						/>
						<Form.Text className='text-muted'>
							I'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' id='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={handleChange}
							id='password'
							type='password'
							placeholder='Password'
						/>
					</Form.Group>
					<Button type='submit'className='btn btn-info'>
						Submit
					</Button>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
