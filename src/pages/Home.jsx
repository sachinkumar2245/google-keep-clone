import React from 'react'
import { useState } from 'react'

//refrence from google keep
// box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//border 1 px solid transparent;
//border-radius: 8px;
const Home = () => {
  const [title, setTitle] = useState('');
  return (
    <div className='w-full h-full pt-7  flex flex-col items-center'>
        {/* <h1 className='text-center'>Welcome to the Home Page</h1> */}

        {/* top section of the home page */}

        <div className=' w-[598px] h-[136px] flex flex-col p-4 shadow-[0_3px_5px_rgba(0,0,0,0.2)] border border-transparent rounded-lg '>
          {/* in this input section we won't use regular input elements. Instead we'll use contenteditable elements as inspired from google */}

          {/* title box */}
          <div className='relative flex-1' id='title_box'>
             <div className={
              `absolute top-0 left-0 text-gray-500 pointer-events-none transition-opacity duration-120 ${title.trim().length === 0 ? 'opacity-100' : 'opacity-0'} text-2xl`
             }>
                Title
             </div>

             <div contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => setTitle(e.target.innerText) } className='min-h-6 outline-none text-2xl'>

             </div>
          </div>
        </div>
    </div>
  )
}

export default Home