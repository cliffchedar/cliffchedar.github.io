import React from 'react'
import Navbar from './component/NavBar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/Services'
import MyWork from './component/MyWork/MyWork'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App
