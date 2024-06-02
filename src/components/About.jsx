import React from "react";
import about from "../Images/about.jpg";

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.001" className="w-full p-[4vw] sm:p-[5vw] lg:p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
            {/* about 1 */}
            <h1 className="font-['Neue_Montreal'] text-[9vw] sm:text-[5vw] lg:text-[4vw] leading-[8vw] sm:leading-[5.5vw] lg:leading-[4.5vw] tracking-tight mt-10 sm:mt-5 lg:mt-3">
                Ochi is a strategic partner for fast-growing tech businesses that need
                to raise funds, sell products, explain complex ideas, and hire great
                people.
            </h1>
            <div className="w-full flex flex-col md:flex-row border-t-[1px] mt-20 border-[#B3CC5D] font-['Neue_Montreal']">
                <div className="w-full lg:w-1/2 mt-8">
                    <h1 className="text-[5vw] sm:text-[4vw] lg:text-[1.1vw] font-thin tracking-wide">
                        What you can expect:
                    </h1>
                </div>
                <div className="w-full lg:w-1/2 mt-8">
                    <h1 className="text-[4vw] sm:text-[2vw] lg:text-[1.1vw] font-thin tracking-wide sm:w-[50vw] md:w-[25vw] lg:w-[19vw]">
                        We create tailored presentations to help you persuade your
                        colleagues, clients, or investors. Whether it's live or digital,
                        delivered for one or a hundred people.
                    </h1>
                    <h1 className="text-[4vw] sm:text-[2vw] lg:text-[1.1vw] font-thin tracking-wide sm:w-[50vw] md:w-[25vw] lg:w-[19vw] mt-10">
                        We believe the mix of strategy and design (with a bit of coffee) is
                        what makes your message clear, convincing, and captivating.
                    </h1>
                </div>
            </div>

            {/* about 2 */}
            <div className="w-full flex flex-col md:flex-row border-t-[1px] mt-20 border-[#B3CC5D] font-Neue_Montreal">
                <div className="w-full md:w-1/2 mt-8 md:mt-10 ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl">Our approach:</h1>
                    <button className="flex items-center gap-6 px-8 py-3 mt-10  md:mt-10 bg-zinc-900 rounded-full text-white text-1xl md:text-sm lg:text-xl">
                        Read More
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className="w-full md:w-1/2 rounded-2xl mt-10 md:mt-10 overflow-hidden">
                    <img className="h-auto md:h-full w-full object-cover" src={about} alt="about" />
                </div>
            </div>

        </div>
    );
};

export default About;
