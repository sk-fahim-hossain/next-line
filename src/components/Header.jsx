import React, { useState } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className='section-center bg-gray-100 relative'>
            <Link to='/' className='inline-flex items-center'>
                <BoltIcon className="w-6 h-5 text-blue-500 font-bold"></BoltIcon>
                <span className='ml-2 text-xl font-bold '>nextLine</span>
            </Link>
            
            {isOpen ?
                <div className='absolute w-11/12 lg:hidden text-gray-600 z-10 top-16 bg-gray-200 p-5'>
                    <span className='cursor-pointer float-right lg:hidden' onClick={()=>setIsOpen(!isOpen)}><XMarkIcon className="h-6 w-6 text-blue-500" /></span>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/books">Books</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About Us</NavLink></li>
                    </ul>
                </div> :
                <span className='cursor-pointer lg:hidden' onClick={()=>setIsOpen(!isOpen)}><Bars3BottomLeftIcon className="h-6 w-6 text-blue-500" /></span>

            }

            <ul className='hidden font-bold text-gray-600 items-center space-x-8 lg:flex'>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/books">Books</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About Us</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;