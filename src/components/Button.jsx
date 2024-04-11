import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button=({type, title, icon,variant} )=>{
  return (
    <button className={`flex justify-center items-center rounded-full gap-2 border ${variant}  py-3 px-8  bg-zinc-900 text-white`}  type={type}>

    <label className='font-[500] whitespace-nowrap cursor-pointer '>
        {title}
    </label>
        {icon }
    </button>
  )
}

export default Button
