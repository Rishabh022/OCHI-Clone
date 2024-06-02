import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import Featured1 from "../Images/Featured1.png";
import Featured2 from "../Images/Featured2.jpg";
import trawa from "../Images/Trawa.jpg";
import pb from "../Images/PB.png";
import { motion, useAnimation } from "framer-motion";



const FeaturedProject = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }


    return (
        <div className='w-full py-10 sm:py-16 lg:py-20 bg-[#F1F1F1]'>
            <div className='w-full px-7 pb-10 sm:px-10 sm:pb-10 lg:px-20 lg:pb-10 border-b-[1px] border-zinc-400 '>
                <h1 className='text-[5vw] sm:text-[4vw] lg:text-[3.5vw] font-["Neue_Montreal"] tracking-wide'>Featured projects</h1>
            </div>
            <div className='px-5 sm:px-10 lg:px-16'>
                <div className="cards w-full flex flex-col sm:flex-row lg:flex-row gap-5 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer w-full sm:w-1/2 lg:w-1/2 h-fit lg:h-[75vh] relative">
                        <h1 className='absolute overflow-hidden flex z-[9] text-[6vw] font["Founders_Grotesk_X"] font-bold leading-none tracking-tighter top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center sm:left-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2  lg:left-full lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 text-[#CDEA68]'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                    className="inline-block">{item}</motion.span>
                            ))}
                        </h1>
                        <h2 className='flex items-center font-["Neue_Montreal"] gap-2'><GoDotFill />FYDE</h2>
                        <div className='carxd w-full h-full rounded-2xl overflow-hidden'>
                            <img className='w-full h-fit lg:h-full bg-cover' src={Featured1} alt="Featured1" />
                        </div>
                        <div className=" ">
                            {["aduit", "copywrite", "Sales desk", "slides design"].map((item, index) => (
                                <button key={index} className='text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw] font-[400] lg:font-[300] uppercase px-4 py-2 m-2 rounded-full tracking-wider border border-black transition-colors duration-300 ease-in-out hover:text-white hover:bg-black'>{item}</button>
                            ))}
                        </div>

                    </motion.div>

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer w-full sm:w-1/2 lg:w-1/2 h-fit lg:h-[75vh] relative">
                        <h1 className='absolute overflow-hidden flex z-[9] text-[6vw] font["Founders_Grotesk_X"] font-bold leading-none tracking-tighter top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center sm:right-full sm:translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 lg:right-full lg:translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 text-[#CDEA68]'>
                            {"VISE".split('').map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                    className="inline-block">{item}</motion.span>
                            ))}
                        </h1>
                        <h2 className='flex items-center font-["Neue_Montreal"] gap-2'><GoDotFill />VISE</h2>
                        <div className='card w-full h-full rounded-2xl overflow-hidden'>
                            <img className='w-full h-fit lg:h-full bg-cover' src={Featured2} alt="Featured2" />
                        </div>
                        <div className="links flex flex-wrap mt-2 gap-2 sm:gap-3 lg:gap-5 font-['Neue_Montreal']">
                            {["agency", "Company Presentation"].map((item, index) => (
                                <button key={index} className='text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw] font-[400] lg:font-[300] uppercase px-4 py-2 m-2 rounded-full tracking-wider border border-black transition-colors duration-300 ease-in-out hover:text-white hover:bg-black'>{item}</button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='px-5 sm:px-10 lg:px-16 mt-10 sm:mt-20 lg:mt-32'>
                <div className="cards w-full flex flex-col sm:flex-row lg:flex-row gap-5 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer w-full sm:w-1/2 lg:w-1/2 h-fit lg:h-[75vh] relative">
                        <h1 className='absolute overflow-hidden flex z-[9] text-[6vw] font["Founders_Grotesk_X"] font-bold leading-none tracking-tighter top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center sm:left-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2  lg:left-full lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 text-[#CDEA68]'>
                            {"TRAWA".split('').map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                    className="inline-block">{item}</motion.span>
                            ))}
                        </h1>
                        <h2 className='flex items-center font-["Neue_Montreal"] gap-2'><GoDotFill />TRAWA</h2>
                        <div className='card w-full h-full rounded-2xl overflow-hidden'>
                            <img className='w-full h-fit lg:h-full bg-cover' src={trawa} alt="trawa" />
                        </div>

                        <div className="links flex flex-wrap mt-2 gap-2 sm:gap-3 lg:gap-5 font-['Neue_Montreal']">
                            {["Brand Identity", "Design Research", "Investor Deck"].map((item, index) => (
                                <button key={index} className='text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw] font-[400] lg:font-[300] uppercase px-4 py-2 m-2 rounded-full tracking-wider border border-black transition-colors duration-300 ease-in-out hover:text-white hover:bg-black'>{item}</button>
                            ))}
                        </div>

                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer w-full sm:w-1/2 lg:w-1/2 h-fit lg:h-[75vh] relative">
                        <h1 className='absolute overflow-hidden flex z-[9] text-[6vw] font["Founders_Grotesk_X"] font-bold leading-none tracking-tighter top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center sm:right-full sm:translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 lg:right-full lg:translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 text-[#CDEA68]'>
                            {"PREMIUM BLEND".split('').map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block">{item}</motion.span>
                            ))}
                        </h1>
                        <h2 className='flex items-center font-["Neue_Montreal"] gap-2'><GoDotFill />PREMIUM BLEND</h2>
                        <div className='card w-full h-full rounded-2xl overflow-hidden'>
                            <img className='w-full h-fit lg:h-full bg-cover' src={pb} alt="Premium Brand" />
                        </div>
                        <div className="links flex flex-wrap mt-2 gap-2 sm:gap-3 lg:gap-5 font-['Neue_Montreal']">
                            {["Branded Template"].map((item, index) => (
                                <button key={index} className='text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw] font-[400] lg:font-[300] uppercase px-4 py-2 m-2 rounded-full tracking-wider border border-black transition-colors duration-300 ease-in-out hover:text-white hover:bg-black'>{item}</button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='pt-2 sm:pt-16 lg:pt-20'>
                <div className="w-full flex mt-2 sm:mt-5 lg:mt-10 items-center justify-center">
                    <button
                        className="flex items-center gap-5 px-8 py-3 mt-10 md:mt-10 bg-zinc-900 rounded-full text-white text-1xl md:text-sm lg:text-xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        View all case studies
                        <div className='flex items-center justify-center'>
                            <div className={`bg-zinc-100 rounded-full transition-all ease-in-out ${isHovered ? 'w-7 h-7' : 'w-2 h-2'}`}></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject
