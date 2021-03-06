import axios from 'axios';
import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import URLS from '../../config';

const Post = () => {

    const[post,setPost]=useState({})
    let history=useHistory()

    const handleSubmit = (event) => {
			axios.post(`${URLS}/messenger/`, post, {
				headers: {
					Authorization: `Token edc4bbb1a9cff37eec56e3df24c42d6fa9263dce`,
				},
			});
			history.push('/')
           
		};

		const handleChange = (event) => {
			setPost({ ...post, [event.target.name]: event.target.value });
		};

    return (
			<div>
				<h1>Make Post</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='formFile' className='mb-3'>
						<Form.Label>Input picture</Form.Label>
						<Form.Control onChange={handleChange} type='file' name='picture' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Label>Body</Form.Label>
						<Form.Control
							onChange={handleChange}
							as='textarea'
							rows={3}
							name='body'
						/>
					</Form.Group>
					<Button type='submit' className='btn btn-info'>
						Submit
					</Button>
				</Form>
			</div>
		);
};

export default Post;