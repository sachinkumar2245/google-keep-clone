import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col'>
      <Navbar/>
      <div className='flex w-full h-full justify-center'>
        <Sidebar/>
        <Home/>
      </div>
    </div>
  )
}

export default App