import React from 'react';
import {GoGlobe} from "react-icons/go";

const Header = () => {
  return (
    <div className='bg-[#F55A5A] flex items-center justify-center py-5 text-white'>
      <p className='pt-1'><GoGlobe color="white" size={25}/></p>
      <p className='px-2'> my travel journal.</p>
    </div>
  )
}

export  default Header;
