import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Main = () => {
  return (
    <div className='sm:mx-1 md:mx-2 lg:mx-4 2xl:mx-auto max-w-screen-2xl mx-auto'>
      <Navbar />
      <div className='min-h-[90vh] '>
        <Outlet />
      </div>
      <h2>footer</h2>
    </div>
  );
};

export default Main;