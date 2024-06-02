import React, { useEffect, useState } from 'react'
import eyesbg from "../Images/eyes_background.jpg";


const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })


    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full  bg-center bg-cover sm:bg-contain lg:bg-cover bg-no-repeat' style={{ backgroundImage: `url(${eyesbg})` }}>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div data-scroll data-scroll-speed="0.1" className='w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-[#F4F4F4] flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3  rounded-full bg-[#212121]  '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[3vw] h-[3vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] rounded-full bg-[#F4F4F4]'></div>
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="0.1" className='w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-[#F4F4F4] flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3  rounded-full bg-[#212121] '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[3vw] h-[3vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] rounded-full bg-[#F4F4F4]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
