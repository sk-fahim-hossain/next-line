import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const { books } = useLoaderData()
    console.log(books)
    return (
        <div className='section-center'>
            <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols  mx-auto'>
                {
                    books.map(singleBook =><Book key={singleBook.isbn13} singleBook={singleBook}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;