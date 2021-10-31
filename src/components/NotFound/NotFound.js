import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Not found</p>
            <Link to='/home'><button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;