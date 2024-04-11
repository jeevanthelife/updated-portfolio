import React from 'react'

function About() {
  return (
    <section >
    <div className='about-me flex flex-col items-center pt-6 lg:mt-6 -mt-14 w-full ' id='about'>
    <h1 className='text-5xl mb-16 text-center font-bold font-serif bg-blue-900 w-full'>About <span className='text-blue-950'>ME</span> </h1>
      <div ><img src="https://www.jeevankarki9.com.np/img/profile.jpg" alt="" className='w-[250px] h-[250px] rounded-full'  /></div>
    <h1 className='text-3xl font-bold mt-8 '>Frontend Developer</h1>
    <p className="max-w-[1000px] px-4 py-4 text-wrap tracking-tight text-center">
            Hello! I am Jeevan Karki, a software engineer based in Kathmandu
            Nepal, who's experience in taking fullstack application from scratch
            to production. I've completed my bachelors in computer science and
            information technology from Tribhhuvan University and currently
            working as a software engineer and Laravel developer at Hazesoft Co.
            | Helsingborg Design Labs. Having some awesome experiences and
            skills but always thriving for more.
          </p>
    </div>
    </section>
  )
}

export default About
