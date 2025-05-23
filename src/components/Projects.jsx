import React from 'react'
import RecentProject from "../constants/RecentProject.js";

const Projects = () => {
  return (
    <div id='Projects' className='py-15 '>
      <h2 className='text-1xl sm:text-3xl lg:mt-20 md:text-4xl lg:text-6xl flex flex-col items-center justify-center font-bold text-neutral-300'>
        A small selection of my
        <span className='text-[#D3E674]'>recent projects</span>
      </h2>
    {/* DUMMY COMMENT */}
    {/* ⁡⁣⁣⁢NEED TO CREATE THE FILE AND MAKE THE OBJECT SO WE COULD USE IT HERE ⁡*/}
      <div className='flex flex-wrap items-center justify-center padding-4 gap-16 mt-10'>
        {RecentProject.map(({title, des, img, iconLists, link}) => (
          <div className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]' >
          {title}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects