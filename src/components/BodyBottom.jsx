import React, { useEffect } from 'react';
import { illustrationLaptopDesktop, illustrationLaptopMobile } from '../assets';
import Logo from "../assets/csol2.png"
import Aos from 'aos';
import 'aos/dist/aos.css';

const BodyBottom = () => {
  useEffect(() => {
    Aos.init({duration: 1500}); //time it takes animation to complete
  }, []);

  return (
    <div className="relative w-full mb-5 bottom-[50px]">
      {/* container for left side image and right side items */}
      <div
        className="flex flex-col px-6 mx-auto 
          space-y-0 md:flex-row mt-0 md:mt-32"
      >
        {/* left side image */}
        <div
          className="w-full h-full relative sm:right-[0px] md:right-[250px] lg:right-[0px] 
          xl:right-[450px] mb-5"
        >
          <picture className="">
            <source
              media="(min-width:650px)"
              srcset={Logo}
            ></source>
            <img
              className="mt-5 lg:mt-0 xl:mt-0"
              src={Logo}
            />
          </picture>
        </div>

        {/* right side items */}
        <div
          data-aos="fade-left"
          className="!mt-5 md:!mt-24 lg:!mt-24 md:w-1/2"
        >
          <h3 className="md:mt-20 mb-5 text-headingColor font-medium text-[25px] text-center md:text-left">
            😻 Why CattySol
          </h3>
          <p className="text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left">
            <h3 className="font-bold py-2 text-lg">Blockchain on Solana</h3>
            CattySol is delighted to call Solana Network its home. Our objective
            is to inject vibrancy into the blockchain realm and offer our
            community unforgettable experiences.
          </p>

        
          <p className="text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left">
            <h3 className="font-bold py-2 text-lg">Strong Community</h3>
            We're nurturing a community, not just launching a token. Join us and
            immerse yourself in a lively gathering of cryptocurrency enthusiasts
            who appreciate the playful side of blockchain technology. Experience
            the camaraderie by becoming part of the CattySol community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyBottom;
