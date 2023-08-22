import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className=''>
      {/* header component */}
      <Header></Header>
      {/* outlet component */}
      <Outlet></Outlet>
      {/* footer component */}
      <footer className="relative bottom-0">
        <p className='text-gray-400 py-2 text-center'><span>&copy;</span>2023 nextLine. All Rights reserved.</p>
      </footer>
    </div>
  );
};

export default App; 