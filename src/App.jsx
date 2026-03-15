import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ProductViewer from '../components/ProductViewer'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger) //variable globally accessible

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App