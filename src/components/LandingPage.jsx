import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import landing from "../Images/landing.jpg"


const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-fit bg-[#F1F1F1] pt-1'>
            <div className="textstructure mt-32 sm:mt-32 lg:mt-52 px-10 sm:px-16 lg:px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div key={index} className='masker text-zinc-800'>
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 &&
                                    (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className='mr-[1vw] w-[10vw] sm:w-[10vw] lg:w-[8vw] rounded-md sm:rounded-md lg:rounded-2xl h-[7.7vw] sm:h-[6.7vw] lg:h-[5.7vw] relative -top-[10px] overflow-hidden'>
                                        <img className="object-cover w-full h-full" src={landing} />
                                    </motion.div>)}
                                <h1 className="text-[14vw] sm:text-[12vw] lg:text-[9vw] pt-[3vw] sm:pt-[3vw] lg:pt-[2vw] -mb-[1vw] uppercase leading-[0.65] font-['Founders_Grotesk_X'] font-bold">{item}</h1>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 sm:mt-5 lg:mt-20 flex flex-col sm:flex-row lg:flex-row sm:justify-start sm:items-start lg:justify-between lg:items-center py-5 sm:py-5 lg:py-5 px-5 sm:px-5 lg:px-20 '>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none py-5'>{item}</p>
                ))}
                <div className="start flex items-center gap-5 ">
                    <div className='uppercase px-5 py-1 border-[1px]  border-zinc-700  rounded-full font-["Neue_Montreal"] font-light text-[3vw] sm:text-[1vw] lg:text-[1vw] transition-colors duration-300 ease-in-out hover:text-white hover:bg-black'>Start the project</div>
                    <div className='w-10 h-10  border-[1px] border-zinc-700 rounded-full sm:flex lg:flex items-center justify-center hidden transition-colors duration-300 ease-in-out hover:text-white hover:bg-black'>
                        <span className='rotate-[45deg] hidden sm:block lg:block'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
