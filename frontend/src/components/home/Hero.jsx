import React from 'react'
import home from '../data/dd'
import Typewriter from 'typewriter-effect'
import './style.css'
const Hero = () => {
  return (
    <>
      <div className="image-overlay">
        <section className='hero'>
          {
            home.map((val, i) => (
                <div className="heroContent">
                    <h3>{val.hello}</h3>
                    <h1>
                        <Typewriter options={{strings: [`${val.welcom}`,`${val.share}`],
                        autoStart: true, loop: true}}/>
                    </h1>
                    <p>{val.desc}</p>
                    <button className="primaryBtn">LOGIN</button>
                </div>
            ))
          }
        </section>
      </div>
    </>
  )
}

export default Hero
