import React, { useEffect, useState } from 'react';
import axios from 'axios';

import API_URL from '../../config';

const Post = () => {
	const [posts, setPosts] = useState([]);
 
	
	const tokens = `c096b0cab2c6cc47dabe4fdbb3f5bd5307619a1e`

	const showPosts = async () => {
		try {
			const response = await axios
				.get(`http://localhost:8000/messenger/`, {
					headers: { Authorization: `Bearer ${tokens}` },
				})
				.then((res) => {setPosts(res.data)})
				.then(console.log(posts))
			} catch (error) {
				console.log(error);
			}
		}
		
		useEffect(() => {
			showPosts();
		}, []);
		
	
	return (
		<div>
			<h1>Post History</h1>
			{posts.id}
		</div>
	);
};

export default Post;
