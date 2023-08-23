
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link, useNavigation } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../assets/animation.json';
import LoadingSpinner from './LoadingSpinner';


const Home = () => {
 const navigation = useNavigation()
 if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
 }

 
    return (
        <div className='section-center flex-col-reverse  md:flex-row lg:flex-row sm:flex-col-reverse'>
            <div className="info">
                <span className='yellow-badge'>ON SALE</span>
                <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 my-4 '>A reader lives a <br className='hidden md:block' /> thousand lives  <span className='text-blue-400 inline-block'>before he dies</span></h2>
                <p className='mb-4'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='flex sm:flex-col-reverse md:flex-row'>
                    <Link to='/books' className='btn-blue bg-blue-400 text-white'><ShoppingCartIcon className="h-6 w-6 mr-0.5" />Visit Store</Link>
                    <Link to='/about' className='btn-blue ml-2 text-dark  hover:text-blue-400 duration-200'>Learn More</Link>
                </div>
            </div>
            <div className="animation-container inline-flex items-center justify-end w-screen pl-8">
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Home;