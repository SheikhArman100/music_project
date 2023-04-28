import Image from 'next/image'
import React from 'react'
import getStartedImage from "../../public/footer.jpg"

const GetStarted = () => {
  return (
    <div className="mt-[4rem] relative">
      <Image
        src={getStartedImage}
        alt="getStarted"
        className="w-full h-[25rem] "
        placeholder='blur'
      />
      <div className='absolute top-0 left-0 mt-[6rem] ml-[3rem]'>
        <h3 className='font-[700] text-[1.75rem] leading-[2rem]'>Get started</h3>
        <p className='fnt-[400] text-[1.1rem] leading-[1.6rem] mt-[1rem]'>
          Join the growing list of creatives who get <br/> their visions heard today
        </p>
        <button  className='mt-[2rem] p-[1rem] bg-ascentColor text-[1.1rem] font-[400] leading-[1.3rem] rounded-lg'>Sign Up Now</button>
      </div>
    </div>
  );
}

export default GetStarted