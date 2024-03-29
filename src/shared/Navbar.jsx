import React, { useContext, useState } from 'react';
import ActiveLink from '../utils/ActiveLink';
// import { AuthContext } from '../providers/AuthProvider';


const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  // const {user} = useContext(AuthContext)
  const user = false;
  console.log(user)
  const navData = (
    <>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/'>
          <a>Work</a>
        </ActiveLink>
      </li>

      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/'>
          <a>Solutions</a>
        </ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/services'>
          <a>Services</a>
        </ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/'>
          {' '}
          <a>Tech for Hire</a>
        </ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/login'>
          <a>Login</a>
        </ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/register'>
          <a>Register</a>
        </ActiveLink>
      </li>
      { !user &&
    <>
    <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/'>
          <a>About Us</a>
        </ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/'>
          <a>Blog</a>
        </ActiveLink>
        </li>
      </>
      }
      
    </>
  );
  return (
    <div className='bg-gray-200 sticky top-0 z-20 py-1 md:py-4 transition-colors duration-300 ease-in bg-transparent  backdrop-blur '>
      <div
        data-aos='fade-down '
        className='w-full bg-blend-multiply flex justify-between items-center bg-base-100 text-font'
      >
        <div className='lg:hidden'>
          <label tabIndex={0} className=' lg:hidden '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10  p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full '
              onClick={() => setShowNavLinks(!showNavLinks)}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`flex flex-col gap-2 bg-orange-400 mt-3 z-1 lg:hidden shadow  rounded-md w-52 ${
              showNavLinks ? 'px-2 py-3' : 'p-0'
            }`}
          >
            {showNavLinks && navData}
          </ul>
        </div>
        <div className=''>
          <a href='/' className=' text-2xl text-red-500'>
            Strong Support 24
          </a>
        </div>
        <div className=' hidden lg:flex'>
          <ul className='flex flex-col lg:flex-row gap-8 px-1'>{navData}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
