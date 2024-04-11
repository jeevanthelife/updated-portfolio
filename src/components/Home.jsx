import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import { FiDownload } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1440px]  px-6 lg:px-20 flex flex-col justify-center items-center gap-10 py-10 pb-32 lg:gap-28 lg:py-20 lg:flex-row" id='home'>
        {/* <span className=" absolute top-64 left-44 h-[144px] lg:w-[777px] w-[200px] bg-blue-400 roudend-full shadow-lg blur-[7rem] -z-10"></span> */}
        {/*LEFT*/}
        <div className="relative z-20 flex flex-1 flex-col pt-16 ">
          <h1 className="lg:font-extrabold font-light text-3xl">Hello,</h1>
          <h1 className="font-light lg:font-extrabold lg:text-6xl text-4xl relative">
            I&apos;m Jeevan Karki{" "}
          </h1>
          <h1 className="font-light lg:font-bold lg:text-[1.8rem] text-4xl capitalize">
            A{" "}
            <span className="text-red-700">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Frontend Developer ",
                  "Backend Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="max-w-[555px] py-4">
            Hello! I am Jeevan Karki, a software engineer based in Kathmandu
            Nepal, who's experience in taking fullstack application from scratch
            to production. I've completed my bachelors in computer science and
            information technology from Tribhhuvan University and currently
            working as a software engineer and Laravel developer at Hazesoft Co.
            | Helsingborg Design Labs. Having some awesome experiences and
            skills but always thriving for more.
          </p>
          <div className="my-5 flex justify-start items-center gap-2 pt-6">
          <Button
            type='button'
            title='Download CV'
            icon=<FiDownload />
            variant= 'bg-zinc-950 text-white hover:bg-zinc-800'
            
          />
          <Button
            type='button'
            title='Contact me'
            icon=<FiArrowRight className="mt-[2px]" />
            variant='bg-[#fff] text-black hover:bg-zinc-200'
          />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-1 xl:flex xl:justify-end xl:items-center ">
            <img src="https://www.jeevankarki9.com.np/img/profile.jpg" alt='bg' width={400} height={400} className="lg:w-full h-auto relative w-[277px]"/>
        </div>
      </div>
    </>
  );
}

export default Home;
