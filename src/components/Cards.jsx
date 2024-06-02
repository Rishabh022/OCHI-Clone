import React from 'react'
import CardsLogo from "../Images/CardsLogo.svg"
import CardsLogo1 from "../Images/CardsLogo1.svg"
import CardsLogo2 from "../Images/CardsLogo2.png"

const Cards = () => {
    return (
        <div className=' w-full h-screen bg-[#F1F1F1] flex flex-col sm:flex-col lg:flex-row items-center gap-5 px-5 sm:px-5 lg:px-20 '>
            <div className="cardcontainer w-full sm:w-full lg:w-1/2 h-[30vh] sm:h-[30vh] lg:h-[50vh]">
                <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex justify-center items-center">
                    <img src={CardsLogo}></img>
                    <button className='absolute px-5 py-1 border-2 rounded-full left-8 bottom-8 text-[#CAE868] border-[#CAE868]'>&copy;2019-2022</button>
                </div>
            </div>
            <div className="cardcontainer w-full sm:w-full lg:w-1/2 h-[60vh] sm:h-[30vh] lg:h-[50vh] flex flex-col sm:flex-row lg:flex-row gap-5">
                <div className="card relative w-full sm:w-full lg:w-1/2 h-[40vh] sm:h-[30vh] lg:h-[50vh] rounded-xl bg-[#212121] flex justify-center items-center">
                    <img src={CardsLogo1}></img>
                    <button className='absolute px-5 py-1 border-2 rounded-full left-8 bottom-8 text-[#F1F1F1] border-[#F1F1F1]'>Rating 5.0 on Clutch</button>
                </div>
                <div className="card relative w-full sm:w-full lg:w-1/2 h-[40vh] sm:h-[30vh] lg:h-[50vh] rounded-xl bg-[#212121] flex justify-center items-center">
                    <img className="h-[15vw] sm:h-[12vw] lg:h-[8vw]" src={CardsLogo2}></img>
                    <button className='absolute px-5 py-1 border-2 rounded-full left-8 bottom-8 text-[#F1F1F1] border-[#F1F1F1]'>Business Bootcamp Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
