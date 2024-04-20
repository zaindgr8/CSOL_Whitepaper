import React from 'react';

const CTA = () => {
  return (
    <div className="flex-col justify-center text-center py-5">
      <h1 className="mobile-font-change flex justify-center font-normal text-white text-[50px]">
        😺 Welcome to CattySol 😺
      </h1>
      <h3 className="flex text-sm md:text-md justify-center font-light text-white">
        Welcome to CattySol ($CSOL), a place in the Solana network, where the
        magic of the Solana meets the mystery of cats! <br />
        Our mission revolves around enhancing the vibrancy and dynamism of the
        Solana ecosystem.
        <br />
        <br /> 
        Our objective is to cultivate a flourishing and inclusive
        community, fostering an environment where individuals can freely share
        their thoughts,
        <br /> support one another, and engage in the collective enthusiasm of
        internet culture.
        <br />
        <br /> CattySol is poised to reign over the realm of Cat
        Memes! Join forces with us to establish the feline trend!
      </h3>

      <div className="flex-col font-ubuntu text-[16px] ml-10">
        <button
          className="bg-white text-ctaPrimary hover:bg-ctaHover hover:text-white
          font-medium py-2 px-4 mr-10 mt-5 rounded-full"
        >
          Buy Now
        </button>
        {/* <button
          className="bg-transparent text-white hover:bg-white hover:text-ctaPrimary border border-white-100
          font-medium py-2 px-6 mr-10 mt-10 rounded-full"
        >
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default CTA;
