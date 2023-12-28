import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from "../img/woman_hero.png"

const Hero = () => {
  
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="uppercase font-semibold flex items-center">
            <div className="w-8 h-0.5 bg-rose-500 mr-3"></div>
          </div>New Trending
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>New Year Sale <br />
            <span className='font-semibold'>For Men & Women</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-primary cursor-pointer'
            onClick={() => window.scrollTo(0, window.innerHeight)}
          >
            Discover More
            <div className="w-20 h-0.5 bg-black mr-3"></div>
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
