import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.001" className='w-full py-[5vw] sm:py-10 lg:py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden text-[#F1F1F1]">
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-semibold uppercase pt-[3vw] -mb-[7vw]'>
                    We Are Ochi
                </motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-semibold uppercase pt-[3vw] -mb-[7vw]'>
                    We Are Ochi
                </motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-semibold uppercase pt-[3vw] -mb-[7vw]'>
                    We Are Ochi
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee
