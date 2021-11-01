import React, { useEffect, useState } from 'react';
import axios from 'axios'
import API_URL  from '../../config';
import { Link } from 'react-router-dom';

const Home = () => {

 

    return (
        <div className='container'>
            <div className='mt-5 p-5 bg-light'>
                <h1 className='display-4'>Welcome to postland </h1>
                <p className='lead'>A fullstack application that uses react and django</p>
                <hr className='my-4' />
                <p>Please Log in</p>
                <Link to='/login' className='btn btn-dark btn-lg' >Login</Link>
            </div>
            
        </div>
    );
};

export default Home;