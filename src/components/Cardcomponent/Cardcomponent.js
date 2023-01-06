import React from 'react'
import {MdLocationOn} from "react-icons/md";


 const Cardcomponent = ({displayimage, country, location, date, details}) =>{
    return (
        <div className=' flex my-5 py-5'>
            <div className='basis-2/6'>
            <img src={displayimage} alt='location_img' className='w-[126px] h-[168px] rounded-md'/>
            </div>
   
            <div className='basis-4/6 px-2'>  
                <p className='flex items-center text-[10px]'><span><MdLocationOn color="#F55A5A" size={15} /></span> <span className='pl-1 pr-2'>{country}</span><span className='text-[#918E9B] underline'>View on Google Maps</span></p>
                <h1 className='font-bold text-[20px] py-1'>{location}</h1>
                <p className='font-bold text-[10px] py-1'>{date}</p>
                <p className='text-[10px] leading-5'>{details}</p>
            </div>
        </div>
    )
 }

export default Cardcomponent;
