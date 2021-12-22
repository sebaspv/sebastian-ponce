import React from 'react'
import Hero from "./components/Hero"
import NotANav from "./components/NotANav"

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
      </div>
    </div>
  )
}

export default index;