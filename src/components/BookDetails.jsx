import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData()
    const [fold, setFold] = useState(true)
    console.log(book);
    return (
        <div className='section-center border-gray-400  rounded-lg border mt-5 shadow-lg lg:mt-5'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 w-11/12 align-center'>
                <div className='flex justify-center overflow-hidden items-center'>
                    <img src={book.image} alt="book-cover" className='object-cover h-96' />
                </div>
                <div className="details lg:p-16 overflow-hidden">
                    <span className='yellow-badge'>ON SALE</span>
                    <h2 className='text-3xl block text-extrabold mt-2'>{book.title}</h2><br />
                    <p className='text-gray-900'>Author:{book.author}</p>
                    <p className='text-gray-900'>Publisher:{book.publisher}</p>
                    <p className='text-gray-900'>Year:{book.year}</p>
                    <p className='text-gray-900'>Rating:{book.rating}</p>
                    <br />
                    {fold ?
                        <p>{book.desc.substring(0, 100)}...
                            <span className='text-blue-400 cursor-pointer' onClick={() => setFold(!fold)}>Read More</span>
                        </p> :
                        <p>{book.desc}
                            <span className='text-blue-400 cursor-pointer duration-200' onClick={() => setFold(!fold)}>Read Less</span>
                        </p>
                    }
                    <div className='flex md:flex-row mt-8 sm:flex-col-reverse'>
                        <a className='btn-blue rounded bg-blue-400 text-white' href={book.url} target="_">Buy Now</a>
                        <h3 className='btn-blue ml-2 text-dark  hover:text-gray-600 duration-200'>{book.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;