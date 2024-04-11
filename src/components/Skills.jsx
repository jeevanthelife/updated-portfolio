import React from 'react'

const myskill =[
    {
        title:'Programming',
        variant:'w-[90%]',
    },
    {
        title:'Web Desigining',
        variant:'w-[70%]',
    },
    {
        title:'System Analysis',
        variant:'w-[80%]',
    },
    
]

function Skills() {
  return (
    <div className='skill-section w-full h-screen my-20 md:px-20 px-8 pt-8' id='skills'>
        <h1 className='w-full text-center text-4xl font-bold pb-6'>My Skills</h1>
        <div className='skill-box flex flex-col gap-2 max-w-auto'>
        {myskill.map((value)=>(
        <div className='skill-item pb-6'>
        <p className='title text-2xl font-light'>{value.title}</p>
        <div className=' skill-bar w-[75%] lg:w-1/2 bg-purple-500/20 h-4 rounded-full'>
            <div className={`bg-purple-500 ${value.variant} h-full rounded-full`}></div>
            {/* <span className='tooltip bg-purple-500 w-[70%] h-full'></span> */}
        </div>
        </div>
        ))}
        </div>
        <div className='pt-12'>
        <h1 className='text-3xl pb-8 '>My Reputation</h1>
        <div className='space-y-8'>
        <div>
            <div className='flex justify-start items-center gap-4 w-full lg:text-2xl pb-2 '>
            <img src="https://www.jeevankarki9.com.np/img/pierre.png" className='w-12 h-12 rounded-full' alt="" />
            <a href="https://hbgdesignlab.se/kontakt/">Pierre Grönberg.</a>
            <p> CEO at HDL, Sweden.</p>
            </div>
            <h1>Working with Jeevan is truly an exceptional experience. He consistently delivers his best work and amazing ideas.</h1>
        </div>
        <div>
            <div className='flex justify-start items-center gap-4 w-full lg:text-2xl pb-2 '>
            <img src="https://www.jeevankarki9.com.np/img/dinesh.png" className='w-12 h-12 rounded-full' alt="" />
            <a href="https://hbgdesignlab.se/kontakt/">Dinesh Ghimire.</a>
            <p>  CEO at Hazesoft Co. Nepal</p>
            </div>
            <h1>Awesome, kind and considerate. Jeevan is always acquiring new knowledge.</h1>
        </div>
        </div>
        
        
        </div>
    </div>
  )
}

export default Skills
