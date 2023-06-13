import React from 'react'
import Clock from '../components/clock'

const Dark = () => {
  return (
    <div className='main-dark'>
      <p className="title">
        <span className="title1" style={{color: "white"}}>Pace</span>
        <span className="title2" style={{color: "white"}}>Sync</span>
      </p>
      <Clock fTimeStyle={{ color: "White" }} ampmStyle={{ color: "White" }} />
    </div>
  )
}

export default Dark