import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import React from 'react'

const page = () => {
  return <>
    <Hero />
    <About />
    <Skills />
    <Work />
    <Resume />
    <Contact />
    <Footer />
  </>
}

export default page