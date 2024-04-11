import React from 'react'
import { FaLocationDot, FaPhone,FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io"
import { FaFacebookF, FaSnapchat, FaInstagram,FaLinkedinIn  } from "react-icons/fa";

function Contact() {
  return (
    //formspree bata msg jane banaune xaieko xa bhane 
    <div className='w-full ' id='contact'>
      <h2 className='text-3xl text-center font-bold lg:mb-8'>Contact Me</h2>
      <div className=' w-full lg:flex lg:justify-center lg:items-center py-8 lg:px-16 px-8 space-y-6 '>
      <div className='lg:w-1/2 text-2xl lg:pl-6 space-y-3'>
      <div className='flex justify-start items-center gap-2'>
      <FaLocationDot />
      <p>Kathmandu,Nepal</p>
      </div>
      <div className='flex justify-start items-center gap-2'>
      <FaPhone/>
      <p>Mobile: +977 9843622366</p>
      </div>
      <div className='flex justify-start items-center gap-2'>
      <IoMdMail />
      <p>Email: jeevan.karki9@outlook.com</p>
      </div>
      <div className='flex justify-start items-center gap-2'>
      <IoMdMail />
      <p>Work Email: jeevan.karki@hazesoft.co</p>
      </div>

      </div>
      <div className=' max-w-md lg:w-1/2 mx-auto p-6 bg-gray-600 rounded-lg shadow-md  '>
        <div className='flex justify-center items-center'>
        <form action="" method='Post' className='space-y-4 w-full'>
        <div>
        <label className='block text-sm font-semibold mb-2' htmlFor="">Your Name</label>
        <input placeholder='' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500' type="text" required />
        </div>
        <div>
        <label className='block text-sm font-semibold mb-2' htmlFor="">Your Email</label>
        <input placeholder='' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500' type="email" required />
        </div>
        <div>
        <label className='block text-sm font-semibold mb-2' htmlFor="">Your Message</label>
        <textarea rows='6' column='10' placeholder='' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500' type="text" required />
        </div>
        <button type='submit' className='bg-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-white hover:scale-90 '>Send Message</button>
        </form>
        </div>
      </div>
      </div>
      <div className='icons text-3xl flex gap-3 lg:px-[5.5rem] px-8 pb-10 '>
      <div className='icon '>
      <a href="https://www.facebook.com/jeevan.karki.332/" target="_blank"><FaFacebookF className='hover:opacity-[0.7] hover:scale-[0.9]'/></a>
      </div>
      <div className='icon'>
      <a href="https://t.snapchat.com/CyzdXwLl" target="_blank"><FaSnapchat className='hover:opacity-[0.7] hover:scale-[0.9]'/></a>
      </div>
      <div className='icon'>
      <a href="https://www.instagram.com/zeonozeon/" target="_blank"><FaInstagram className='hover:opacity-[0.7] hover:scale-[0.9]'/></a>
      </div>
      <div className='icon'>
      <a href="https://twitter.com/jeevan_thelife" target="_blank"><FaXTwitter className='hover:opacity-[0.7] hover:scale-[0.9]'/></a>
      </div>
      <div className='icon'>
      <a href="https://www.linkedin.com/in/jeevankarki" target="_blank"><FaLinkedinIn className='hover:opacity-[0.7] hover:scale-[0.9]'/></a>
      </div>
      
      </div>
    </div>
  )
}

export default Contact
