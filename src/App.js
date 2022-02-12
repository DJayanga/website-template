import React from 'react'
import { Article, Brand, CTA, Navbar } from './components'
import { Blog , Footer, Possibility, Features, WhatWebTemp, Header } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatWebTemp />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />


    </div>
  )
}

export default App