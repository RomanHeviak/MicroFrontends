import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <div>
            <Link className='link' to={'/'}> Home </Link>
            <Link className='link' to={'/counter'}> Counter </Link>
        </div>
    );
};

export default Navbar;