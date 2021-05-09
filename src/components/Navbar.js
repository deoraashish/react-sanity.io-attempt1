import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    activeClassName='text-white'
                    className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'>Ashish</NavLink>

                    <NavLink 
                    to="/posts"
                    activeClassName="text-red-100 bg-red-700"
                    className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                    >Blog Posts</NavLink>

                    <NavLink 
                    to="/projects"
                    activeClassName="text-red-100 bg-red-700"
                    className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                    >Projects</NavLink>

                    <NavLink 
                    to="about"
                    activeClassName="text-red-100 bg-red-700"
                    className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                    >About me!</NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://www.linkedin.com/in/ashishdeora/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }}/>
                    <SocialIcon url='https://twitter.com/Deora_Ashish284' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }}/>
                    <SocialIcon url='https://www.facebook.com/ashish.deora.7/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;