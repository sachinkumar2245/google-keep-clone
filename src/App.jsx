import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <Navbar/>
      <Sidebar/>
      <hr className='border text-gray-400' />
    </div>
  )
}

export default App