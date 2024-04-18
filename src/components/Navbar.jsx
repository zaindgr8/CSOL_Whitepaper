import { useState } from 'react';
import {
  iconHamburger,
  iconClose,
  iconArrowDark,
  iconArrowLight,
  logo,
} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [openId, setOpenId] = useState(undefined);

  return (
    <nav className='w-full flex py-6 ml-5 justify-between items-center navbar'>
        {/* logo and dropdown menus */}
      <img src={logo} alt='blogr' className='w-[75px] h-[30px]' />
      <ul className='list-none sm:flex hidden ml-10 justify-start items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-ubuntu
            font-medium
            hover:underline
            text-[13px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-9'}
          text-white`}>
            <a
              className='float-left'
              onClick={() => setOpenId((prev) => (prev === nav.id ? undefined : nav.id))}
              href={`#${nav.id}`}>
              {nav.title}
              {/* <ImageChange /> */}
              <img className={`${openId === nav.id ? 'rotate-180' : ''}
              ml-2 mt-1.5 cursor-pointer float-right w-[9px] h-[6px]`}
              src={iconArrowLight} />
            </a>

            {/* drop down menu */}
            <div className={`${openId !== nav.id ? "hidden" : "relative"} mr-10`}>
              <ul className='list-none mt-10 absolute dropdown-background'>
                {nav.links.map((link, index) => (
                  <li
                    // onClick={() => setOpenId((prev) => (prev === nav.id ? undefined : ''))}
                    key={link.name}
                    className={`font-ubuntu font-normal text-headingColor cursor-pointer hover:font-bold ${
                      index !== nav.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>              
        ))}
      </ul>

        {/* login & signup buttons */}
      <div className='sm:flex hidden flex-1 justify-end items-center mr-20
      text-white text-[14px] font-medium font-ubuntu'>
        <button className='mr-10 hover:underline'>Login</button>
        <button class="bg-white text-ctaPrimary hover:bg-ctaHover hover:text-white
        font-bold py-2 px-7 rounded-full">
          Sign Up
        </button>
      </div>
      
        {/* hamburger menu */}
      <div className='sm:hidden flex flex-1 justify-end items-center mr-10'>
        <img
          src={openId ? iconClose : iconHamburger}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setOpenId((prev) => !prev)}/>

        {/* hamburger items */}
        <div className={`${ openId ? 'flex' : 'hidden'} hamburger-menu
        p-6 fixed top-20 right-0
        mx-4 my-2 min-w-[140px] w-[90%] shadow-md bg-white rounded`}>
         <ul className='list-none flex flex-col items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-overpass ${openId === nav.id ? 'text-bodyColor' : 'text-footerBgColor'}
                cursor-pointer font-medium
                text-[17px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
                `}>
                <a
                className={`${openId !== nav.id ? "" : "ml-16" } float-left hover:underline`}
                onClick={() =>
                setOpenId((prev) => (prev === nav.id ? true : nav.id))}
                 href={`#${nav.id}`}>
                 {nav.title}
                <img className={`${openId === nav.id ? 'rotate-180' : ''}
                ml-2 mt-1 cursor-pointer float-right w-[9px] h-[6px]`}
                src={iconArrowDark} />
                </a>

                 {/* drop down hamburger menu items */}
                <div className={`${openId !== nav.id ? "hidden" : "relative" } px-25 
                  items-center text-center `}>
                  <ul className='list-none mt-10 dropdown-background-mobile'>
                    {nav.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-ubuntu font-normal text-bodyColor cursor-pointer 
                      hover:font-bold ${index !== nav.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                    </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <hr className="my-8 w-80 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>   
                  {/* login & signup */}
            <div className='flex flex-col justify-center items-center
              text-[14px] font-medium font-ubuntu'>
              <button className='text-footerBgColor hover:underline text-[15px]'>Login</button>
              <button className=" text-white button-cta-gradient hover:bg-ctaHover hover:text-footerBgColor
                my-5 font-bold py-2 px-7 rounded-full">
                Sign Up
              </button>
            </div> 

          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
