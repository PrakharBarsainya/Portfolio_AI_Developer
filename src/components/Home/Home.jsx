import React from "react";
import avatarImg from '../../assets/1187092-48478-removebg-preview.png'
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
            <TextChange/>
        </h1>
        <p className='text-sm md:text-2xl tracking-tight mt-5'>I am a B.Tech Information Technology graduate and an aspiring AI/ML Engineer passionate about building intelligent solutions using Machine Learning, Deep Learning, and Computer Vision. I have developed real-world AI applications and enjoy solving challenging problems through technology. Explore my skills, projects, and experience to learn more about my work.<br/>Scroll down to learn more about my skills and projects I have worked on.
              </p>
              <button
  className='bg-[#465697] text-sm md:text-lg md:py-2 md:px-4 text-white px-3 py-2 mt-5 md:md-10 rounded-3xl hover:opacity-85 duration-300 hover:scale-105 font-semibold'
  onClick={() => window.open('https://www.linkedin.com/in/prakhar-barsainya-6538ab248/', '_blank')}>

           Contact Me
           </button>

        </div>
        <div>
            <img className='' src={avatarImg} alt=''/>
        </div>
    </div>)
}
export default Home;
