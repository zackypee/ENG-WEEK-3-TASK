import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='w-screen bg-amber-800 flex justify-evenly h-12'>
      <nav className='flex gap-4 items-center'>
        <button><Link to='/'>To-do List</Link></button>
        <button><Link to='/quote'>Quote Generator</Link></button>
        <button><Link to='/recipe'>Recipe Finder</Link></button>
      </nav>
    </div>
  );
};

export default Nav;
