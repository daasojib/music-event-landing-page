import React from 'react';
import banner from '../assets/image-cover.jpg'
import logo from '../assets/Logo2.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1549761505-ce78ee8354d2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='flex items-center top-0 absolute text-white px-5 mx-auto'>
                <img className='h-24 md:me-64' src={logo} alt="" />
                <div className='ms-72'>
                    <ul className='flex gap-5'>
                    <NavLink>About</NavLink>
                    <NavLink>Performer</NavLink>
                    <NavLink>Event Schedule</NavLink>
                    <NavLink>Blog</NavLink>
                    <li><button className="btn btn-sm btn-outline btn-primary">Contact</button></li>
                    </ul>
                </div>
            </div>
            <p className='font-semibold font-serif text-4xl absolute top-32 text-white p-16 w-1/2'>Feel the rhythm, embrace the melody, and let the music take you on a journey.</p>
        </div>
    );
};

export default Header;