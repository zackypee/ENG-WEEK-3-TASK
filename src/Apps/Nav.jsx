import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='w-screen bg-gray-300 text-gray-900 border-b border-gray-300 flex justify-center h-12 p-2'>
      <nav className='flex text-sm lg:gap-4 gap-2 '>
        <button className='lg:px-4 px-2  py-1 rounded-md border border-gray-300 hover:bg-gray-500 bg-gray-100 transition' ><Link to='/'>To-do List</Link></button>
        <button className='lg:px-4 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-500 bg-gray-100 transition'><Link to='/quote'>Q-Generator</Link></button>
        <button className='lg:px-4 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-500 bg-gray-100 transition'><Link to='/recipe'>Recipe Finder</Link></button>
      </nav>
    </div>
  );
};

export default Nav;
