import React from 'react';
import bannerImg from '../../assets/photo-C8q0KQHG.webp';

const ProjectCard = ({ title, main, demo, code }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <img src={bannerImg} alt='' className='p-4' />

      <h3 className='text-xl px-4 md:text-2xl font-bold text-white leading-normal'>
        {title}
      </h3>

      <p className='px-4 text-sm md:text-md leading-tight py-2'>
        {main}
      </p>

      <div className='flex mt-2 p-2 md:p-4 gap-2 md:gap-4'>
        {demo && (
          <button
            onClick={() => window.open(demo, "_blank")}
            className='md:mt-10 bg-[#465697] text-sm md:text-lg md:py-2 md:px-4 text-white px-3 py-2 rounded-3xl hover:opacity-85 duration-300 hover:scale-105 font-semibold'
          >
            View
          </button>
        )}

        <button
          onClick={() => window.open(code, "_blank")}
          className='md:mt-10 bg-[#465697] text-sm md:text-lg md:py-2 md:px-4 text-white px-3 py-2 rounded-3xl hover:opacity-85 duration-300 hover:scale-105 font-semibold'
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;