import React from "react";
import Tele from "../assets/telegram.png";
import Twiter from "../assets/twitter.png";
import Cat from "../assets/Cat1.png";

const Footer = () => {
  return (
    <footer class="bg-[#1C0738]">
      <div className="flex items-center justify-between px-12">
        <div className=" mt-24 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
          <ul class="text-white dark:text-gray-400 font-light font-helveticaNeue ">
            <li class="mb-4">
              <a href="#MemberShips" class="hover:underline">
                <img width={240} src={Tele} />
              </a>
            </li>
          </ul>
        </div>
        <div className=" mt-24 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
          <ul class="text-white dark:text-gray-400 font-light font-helveticaNeue ">
            <li class="mb-4">
              <a
                href="#MemberShips"
                className="flex flex-col items-center gap-y-3"
              >
                <img width={240} src={Cat} />
                <p className="grobold text-2xl ">$CSOL</p>
              </a>
            </li>
          </ul>
        </div>
        <div className=" mt-24 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
          <ul class="text-white dark:text-gray-400 font-light font-helveticaNeue">
            <li class="mb-4">
              <a href="#services" class="hover:underline ">
                <img width={240} src={Twiter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class=" justify-center items-center mx-auto flex flex-wrap w-[90%] pb-5">
        <p className="font-helveticaNeue font-light text-[12px] xs:text-[9px] text-white">
          © CATTY 2024 SOL All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
