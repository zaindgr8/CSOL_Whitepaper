import React from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';
import styles from '../style';

const Footer = () => {
  return (
    <div className={`mr-10 flex-col md:flex-row ${styles.flexCenter}`}>
    {/* logo image */}
      <img src={logo} alt='blogr' className='w-[75px] h-[30px] mt-20 ml-10 md:mb-56 md:ml-32 lg:ml-40' />

      {/* items list  */}
        <ul className='list-none sm:flex ml-10 mt-12 md:ml-32 lg:ml-40 justify-start flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-ubuntu text-center md:text-left 
            font-medium  mb-10 md:ml-32 xl:ml-56 mr-0 md:mr-16
            text-[13px] ${index === navLinks.length - 1 ? '' : ''}
          text-white`}>
            <a
              className='float-left md:float-none mb-5 ml-2 md:ml-0 hover:cursor-pointer
               hover:underline'>
              {nav.title}
            </a>

            <ul className='list-none mt-7'>
                {nav.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-center md:text-left text-footerTextColor cursor-pointer
                     hover:underline ${
                      index !== nav.links.length - 1 ? 'mb-3' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
          </li>              
        ))}
      </ul>
    </div>
  );
};

export default Footer;
