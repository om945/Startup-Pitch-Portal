import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import uploadPitchImg from "../assets/uploadPitchImg.png";
import gridTunnelImg from "../assets/gridTunnelImg.jpg";

const HeroSec = ({ sectionRef }) => {
    const scrollToSection = () => {
        if (sectionRef.current) {
            const yOffset = -80;
            const y =
                sectionRef.current.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className='flex flex-col justify-center items-center w-full px-[2rem] mini-desktop:px-[3rem] lg:px-[4rem] xl:px-[8rem] pt-[8rem] pb-[3rem] overflow-hidden'>
            <div className='w-full fade-bottom-mask absolute z-0 mt-[-3rem] overflow-hidden'>
                <img src={gridTunnelImg} alt="" className='w-full h-full object-fill opacity-15 mix-blend-screen' />
            </div>
            <div className='flex flex-col items-center z-10 gap-[1rem] xl:gap-[1.5rem] text-center'>
                <h1 className='text-[2.5rem] tablet:text-[2.7rem] xl:text-[3.2rem] text-txt-black text-center font-Bold leading-[3.5rem] xl:leading-[4rem] mini-desktop:w-[60%] mini-desktop:text-[3rem]'>Where <span className='bg-gradient-to-r from-[#1E40AF] to-[#0EA5E9] bg-clip-text text-transparent'>Bold Ideas</span> Meet the Right Eyes.</h1>
                <p className='text-txt-gray-black text-[0.9rem] tablet:text-[1rem] mini-desktop:text-[1.1rem] xl:text-[1.3rem] font-Regular w-auto leading-[1.6rem]'>Bridging visionary founders with the investors who believe in them.</p>
                <button className='bg-btn-blue font-Medium text-nav-white py-[0.5rem] px-[1.5rem] rounded-3xl cursor-pointer hover:bg-hover-blue border-none outline-none transition' onClick={scrollToSection}>
                    Get Started
                    <FontAwesomeIcon icon={faChevronRight} className='ml-[0.8rem]' />
                </button>
                <div className='w-[90%] fade-bottom-mask mt-[2rem]'>
                    <img src={uploadPitchImg} alt="hero-img" className='w-full h-full object-fill rounded-[0.5rem]' />
                </div>
            </div>
        </div>
    )
}

export default HeroSec