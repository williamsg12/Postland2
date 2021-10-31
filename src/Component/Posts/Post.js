import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../config';

const Post = () => {
	const [posts, setPosts] = useState([]);

	const showPosts = async () => {
		try {
			const response = await axios.get(`${API_URL}/messenger`);
			setPosts(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		showPosts();
	}, []);

	return (
		<div>
			{posts.body}
			<h1>Post History</h1>
		</div>
	);
};

export default Post;
