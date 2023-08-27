import React, { useState } from 'react'
import logo from "../data/images/logo.png"
import NavLink from "./navbar-links/navbar-links"
import {Menu} from "@mui/icons-material"
import './Header.css'


const Header = () => {
    const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header>
        <div className="container flexsb">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className={responsive? "hideMenu" : "nav"}>
                <ul className={responsive? "ulFlexCol" : "ulFlexRow"}>
                    <NavLink href="/" name="Home"/>
                    <NavLink href="/" name="Login"/>
                </ul>
            </div>
            <button className='toggle' onClick={()=>setResponsive(!responsive)}>
                <Menu className="icon"></Menu>
            </button>
        </div>
      </header>
    </>
  )
}

export default Header
