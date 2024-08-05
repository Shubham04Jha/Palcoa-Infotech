import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function About() {
  return (
    <div className='flex flex-col  min-h-screen'>
      <Header />
      <div className='flex-1 bg-gray-800'>About</div>
      <Footer />
    </div>
  )
}

export default About