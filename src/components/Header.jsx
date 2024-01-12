import React from 'react';
import banner from '../assets/image-cover.jpg'
import logo from '../assets/Logo2.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="relative">
            <img src="https://images.unsplash.com/photo-1549761505-ce78ee8354d2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full" />

            <div className="absolute top-0 left-0 right-0 flex justify-between items-center bg-black bg-opacity-50 p-4">
                <img src={logo} alt="" className="h-24 md:w-64" />
                <div className="md:ml-72">
                    <ul className="flex flex-col md:flex-row gap-5">
                        <li><NavLink href="#" className="text-white">About</NavLink></li>
                        <li><NavLink href="#" className="text-white">Performer</NavLink></li>
                        <li><NavLink href="#" className="text-white">Event Schedule</NavLink></li>
                        <li><NavLink href="#" className="text-white">Blog</NavLink></li>
                        <li><button className="btn btn-sm btn-outline btn-primary">Contact</button></li>
                    </ul>
                </div>
            </div>

            <p className="font-semibold font-serif text-4xl absolute top-32 text-white p-6 md:w-1/2 md:left-1/4">Feel the rhythm, embrace the melody, and let the music take you on a journey.</p>
        </div>
    );
};

export default Header;