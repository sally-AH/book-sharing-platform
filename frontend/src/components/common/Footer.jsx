import React from 'react'
import { social } from "../data/dd"
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            {social.map((item) => (
            <>
                <i data-aos='zoom-in'>{item.icon}</i>
            </>
            ))}
            <p data-aos='zoom-in'>All Right Resceved 2018</p>
        </footer>
    </>
  )
}

export default Footer
