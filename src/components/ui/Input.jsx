import React from 'react'
import { assets } from '../../Assets/assets'
const Input = () => {
  return (
    <div className="w-1/2 m-1 h-10 rounded relative left-1/12 flex items-center bg-gray-100">
        <button className="h-9 w-9 rounded-full ml-0.5 p-2 cursor-pointer hover:bg-gray-200">
          <img src={assets.search_logo} alt="Search" className="h-5" />
        </button>

        <input placeholder="Search..." className="w-[90%] h-full ml-0.5 focus:outline-none" type="text" />

        <button className=" rounded-full mr-1 cursor-pointer hover:bg-gray-200">
          <img src={assets.delete_logo} alt="Delete" className="h-8" />
        </button>
      </div>
  )
}

export default Input