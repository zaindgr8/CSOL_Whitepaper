import React, {useEffect } from 'react';
import { illustrationEditorDesktop, illustrationEditorMobile } from '../assets';
import Logo from "../assets/team.png"

import Aos from 'aos';
import 'aos/dist/aos.css';


const BodyTop = () => {
  useEffect(() => {
    Aos.init({duration: 1500}); //time it takes animation to complete
  }, []);

  return (
    <div className="w-full mt-5">
      <h2 className="text-center text-[30px] text-headingColor font-medium">
        Team Vision
      </h2>
      <div className="flex flex-col-reverse px-6 mx-auto space-y-0 md:flex-row ">
        {/* left side items */}
        <div data-aos="fade-right" className=" md:w-1/2">
          <h3 className="md:mt-20 text-headingColor font-medium text-[25px] text-center md:text-left">
            The Memecoin Landscape:
            <br /> Cats vs. Dogs
          </h3>
          <p className="text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left">
            In the world of memecoins, a narrative unfolds: cats rebel against
            the dominance of dogs. This battle symbolizes the struggle for
            supremacy among cryptocurrencies. Cats represent the underdogs
            challenging the established order of dogs, captivating
            cryptocurrency enthusiasts.
          </p>

          <h3 className="mt-10 text-headingColor font-medium text-[25px] text-center md:text-left">
            CattySol: Symbolic Leader
            <br /> & Potential Revolutionary
          </h3>
          <p className="text-bodyColor text-[15px] font-light mt-2 items-center text-center sm:text-left">
            CattySol symbolizes felines, rallying support for the uprising.
            While symbolic, there's a need for genuine leadership. CattySol
            emerges as a potential candidate, offering both symbolic
            representation and leadership in this meme revolution.
          </p>
        </div>
        {/* right side picture */}
        <div className="w-full h-full relative top-0 sm:top-2 mb-32 lg:bottom-9 xl:bottom-0 mr-16">
          <picture className="">
            <source media="(min-width:650px)" srcset={Logo}></source>
            <img
              className="mt-5 lg:mt-0 xl:mt-0 md:ml-80 lg:ml-[450px]"
              src={Logo}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default BodyTop;
