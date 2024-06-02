import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen bg-[#F1F1F1] px-10 py-10 sm:px-10 sm:py-10 lg:px-20 lg:py-10 flex flex-col sm:flex-row lg:flex-row gap-0 sm:gap-5 lg:gap-5'>
            <div className="w-full sm:w-1/2 lg:w-1/2 h-fit lg:h-full flex flex-col justify-between font-['Founders_Grotesk_X'] font-bold">
                <div className='leading-none' >
                    <h1 className='text-[15vw] sm:text-[8vw] lg:text-[9vw] leading-none uppercase'>Eye-<br />Opening</h1>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 font-['Founders_Grotesk_X'] font-bold ">
                <h1 className='text-[15vw] sm:text-[8vw] lg:text-[9vw] leading-none '>PRESENTATIONS</h1>
                <div className='flex justify-between'>
                    <div className='w-fit h-fit font-["Neue_Montreal"] text-[7vw] sm:text-[2.5vw] lg:text-[1.5vw] font-light tracking-wide'>
                        <div className=''>
                            S:
                            <div className="links flex flex-col font-['Neue_Montreal'] py-5">
                                {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
                                    <a key={index} className={'text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] font-light capitalize underline'}>{item}</a>
                                ))}
                            </div>
                        </div>
                        <div className=''>
                            L:
                            <div className="links flex flex-col font-['Neue_Montreal'] py-5">
                                {["202-1965 W 4th Ave", "Vancouver Canada", "30 Chukarina St", "Lviv, Ukraine"].map((item, index) => (
                                    <a key={index} className={`text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] font-light capitalize underline ${index === 2 && "mt-[30px]"}`}>{item}</a>
                                ))}
                            </div>
                        </div>
                        <div className=''>
                            E:
                            <div className="links flex flex-col font-['Neue_Montreal'] py-5">
                                {["hello@ochi.design"].map((item, index) => (
                                    <a key={index} className={`text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] font-light capitalize underline ${index === 2 && "mt-[30px]"}`}>{item}</a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='w-fit h-full font-["Neue_Montreal"] text-[7vw] sm:text-[2.5vw] lg:text-[1.5vw] font-light tracking-wide'>
                        <div className='h-full'>
                            M:
                            <div className="links flex flex-col font-['Neue_Montreal'] py-5">
                                {["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => (
                                    <a key={index} className={'text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] font-light capitalize  underline'}>{item}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
