import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ singleBook }) => {
    return (
        <Link to={`/book/${singleBook.isbn13}`}>
            <div className=' rounded-md  relative shadow-lg transform hover:-translate-y-2 duration-200 hover:shadow-2xl'>
                <img src={singleBook.image} alt="book-cover" className="object-cover w-full h-56 md:h-64 lg:w-80" />
                <div className='absolute bg-black bg-opacity-75 inset-0 opacity-0 p-6 cursor-pointer rounded flex flex-col  hover:opacity-90 duration-200  text-gray-300 '>
                    <p>{singleBook.title}</p><br />
                    <p>{singleBook.subtitle.substring(0, 4)}...</p><br />
                    <h4 className="mt-auto">{singleBook.price}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Book;