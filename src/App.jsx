import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div className=' overflow-x-hidden max-w-6xl mx-auto px-4'>
        <Navbar />
        <Hero />
        <div className="h-[3000px]"></div>
    </div>
  )
}

export default App