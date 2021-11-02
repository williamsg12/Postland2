import axios from 'axios';
import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap'


const Post = () => {

    const[post,setPost]=useState({})
    // let useHistory=useHistory()

    const handleSubmit = (event) => {
			event.preventDefault();
			axios.post(`${URL}/messenger/`,post )
            .then(res=>localStorage.setItem('token',res.data.auth_token))
		};

		const handleChange = (event) => {
			setPost({ ...post, [event.target.id]: event.target.value });
		};

    return (
			<div>
				<h1>Make Post</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='formFile' className='mb-3'>
						<Form.Label>Input picture</Form.Label>
						<Form.Control onChange={handleChange} type='file' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Label>Body</Form.Label>
						<Form.Control onChange={handleChange} as='textarea' rows={3} />
					</Form.Group>
					<Button type='submit' className='btn btn-info'>
						Submit
					</Button>
				</Form>
			</div>
		);
};

export default Post;