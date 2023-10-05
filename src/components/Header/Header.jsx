import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header__title'>To Do List</h1>
            </Link>
            <Link to='/signin' className='header__link'>
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/guest-male--v1.png" alt="guest-male--v1"/>
            </Link>
        </header>    
    )
}