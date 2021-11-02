import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import URL from '../../config';

const Posts = () => {
	const [posts, setPosts] = useState([]);
 
	const deletePost=()=>{
		axios.delete(`${URL}/messenger/`, {
			headers: { Authorization: `Token ${localStorage.getItem('token')}` },
		});
	}
	

	const showPosts =  () => {
		
			axios
				.get(`${URL}/messenger/`, {
					headers: {
						Authorization: `Token edc4bbb1a9cff37eec56e3df24c42d6fa9263dce`,
					},
				})
				.then((res) => setPosts(res.data))
				.then((posts) => console.log(posts))
				.catch((error) => console.log(error));
		
		}
		
		useEffect(() => {
			showPosts();
		}, []);
		
	
	return (
		<div className='card bg-light '>
			<h1>Post History</h1>
			{posts.length && posts.map(item=>{
			 return(	<>
			 <h3>Post#:{item.id}</h3>
			 <p>Body:{item.body}</p>
			 <h4>LastUpdated on :{item.updated}</h4>
			 <h4>Created on :{item.created}</h4>
			<img src={item.picture} alt="postpicture" />
			<Button className='small' onClick={deletePost}>Delete</Button>
			<Button className='small'>Update</Button>
			</>
			)})}
		</div>
	);
};

export default Posts;
