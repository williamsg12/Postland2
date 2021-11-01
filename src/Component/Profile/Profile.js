import axios from 'axios';
import React, { useEffect,useState } from 'react'
import URL from '../../config';
const Profile = () => {
    const [state, setstate] = useState({})
    const tokens = `c096b0cab2c6cc47dabe4fdbb3f5bd5307619a1e`;
    const getProfile= async()=>{
        try {
            const response = await axios
							.get(`http://localhost:8000/users/`, {
								headers: { Authorization: `Bearer ${tokens}` },
							})
							.then(setstate(response.data));
        } catch (error) {
            
        }
    }
    useEffect(() => {
       getProfile()
    }, [])
    return (
        <div>
            <h1>Profile Details</h1>

            <h3>Email:{state.email}</h3>
            <h3>Id:{state.id}</h3>
            <h3>Username:{state.username}</h3>
            
        
        </div>
    );
};

export default Profile;