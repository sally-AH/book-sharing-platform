import React from 'react'
import CountUp from 'react-countup'
import { project } from "../data/dd"
import './Counter.css'
const Counter = () => {
  return (
    <>
      <div className="image-overlay">
        <div className='Counterhero counter'>
          <div className='container grid3 grid4'>
            {project.map((item) => (
              <div className='box' data-aos='zoom-in'>
                <i>{item.icon}</i>
                <h1 className='heading'>
                  <CountUp enableScrollSpy duration={2} end={item.num} />
                </h1>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
      </div>

      </div>
    </>
  )
}

export default Counter
