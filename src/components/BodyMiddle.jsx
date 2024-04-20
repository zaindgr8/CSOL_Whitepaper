import React, { useEffect } from 'react';
import { bgPatternCircles, illustrationPhones } from '../assets';
import Logo from "../assets/mission.png"
import Aos from 'aos';
import 'aos/dist/aos.css';

const BodyMiddle = () => {
  useEffect(() => {
    Aos.init({duration: 1500}); //time it takes animation to complete
  }, []);

  return (
    <div className="relative mt-0 sm:mt-32">
      {/* phone image  */}
      <div className="z-10">
        <img
          className="z-10 absolute top-[-50%] md:top-[-30%] left-0 sm:left-[150px] md:left-0"
          src={Logo}
        />
      </div>

      {/* background image and content  */}
      <div className="relative flex h-[550px] md:h-[350px] bg-body-gradient overflow-hidden">
        {/* background image  */}

        <div className="rounded-borders relative h-[1000px] w-[950px] md:right-[130px] bottom-[570px]">
          {/* <img
            className="relative h-[1000px] w-[950px] md:right-[130px] bottom-[570px] mobile-circle-image"
            src={bgPatternCircles}
          /> */}
        </div>

        {/* body content  */}
        <div
          data-aos="fade"
          className="absolute md:relative flex-col z-1 mt-[100px] w-[100%] ml-0 md:ml-32
         justify-center items-center bottom-[140px] md:bottom-[0px]"
        >
          <h3 className="font-medium text-[34px] text-white text-center md:text-left mt-40 md:mt-0 mb-2 md:mb-0">
            😸 Our Mission
          </h3>
          <p className="text-[15px] text-white text-center md:text-left px-10 md:px-0 md:pr-32">
            CattySol firmly believes that the traditional notion of a universal
            standard for pet care falls short in meeting the diverse needs of
            individual pets. <br />
            <br />
            We are committed to harnessing the power of cutting-edge
            technologies such as blockchain and artificial intelligence (AI),
            specially trained in the intricacies of pet care.
            <br />
            <br />
            Through this approach, we strive to simplify the complexities of pet
            care while making it accessible and affordable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyMiddle;
