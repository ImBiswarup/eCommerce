import React from 'react';
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";

const Footer = () => {
  return (
    <footer className='bg-primary py-2 text-white flex items-center justify-around'>
      <div className="container-mx-auto ">
        <p className='text-white text-center'>
          eCommerce WebApp made by
          <span className='hover:text-blue-500'>
            <a href="https://github.com/ImBiswarup" target='_blank'> Biswarup Ghosh</a>
          </span>
        </p>
      </div>
      <div className="md:flex-col md:flex hidden gap-y-2">
        <div className="flex">
          <div className="logo">
            <img className='h-5 w-5 rounded mr-2 bg-white hover:bg-pink-400 hover:cursor-pointer' src={instagram} alt="" />
          </div>
          <div className="link hover:text-pink-400">
            <a href="https://www.instagram.com/i_ambiswarup/" target='_blank'>i_ambiswarup</a>
          </div>
        </div>

        <div className="flex">
          <div className="logo">
            <img className='h-5 w-5 rounded-full mr-2 bg-white hover:cursor-pointer hover:bg-blue-500' src={facebook} alt="" />
          </div>
          <div className="link hover:text-blue-500">
            <a href="https://www.facebook.com/biswa.ghosh.927/" target='_blank'>Biswarup Ghosh</a>
          </div>
        </div>

        <div className="flex">
          <div className="logo">
            <img className='h-5 w-5 rounded mr-2 bg-white hover:cursor-pointer hover:bg-sky-400' src={twitter} alt="" />
          </div>
          <div className="link hover:text-sky-400">
            <a href="https://twitter.com/Im_Biswarup" target='_blank'>Im_Biswarup</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
