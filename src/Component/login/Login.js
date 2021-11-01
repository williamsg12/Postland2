import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<Card >
				<Card.Header>Featured</Card.Header>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Link to='/'className='btn btn-info'>Submit</Link>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
