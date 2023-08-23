import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Books from './components/Books.jsx';
import Book from './components/Book.jsx';
import BookDetails from './components/BookDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"books",
        element:<Books/>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path:"book/:id",
        element:<BookDetails></BookDetails>,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path:"spiner",
        element:<LoadingSpinner/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
