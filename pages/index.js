import React from 'react'
import Hero from "../components/Hero"
import NotANav from "../components/NotANav"
import Feature from "../components/Feature"
import Footer from "../components/Footer"

const index = () => {
  return (
    <div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden">
          <NotANav />
        </div>
        <div className="w-full overflow-hidden">
          <Hero />
        </div>
        <div className="w-full overflow-hidden">
          <Feature />
        </div>
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default index;