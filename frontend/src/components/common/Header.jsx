import React, { useState } from 'react'
import logo from "../data/images/logo.png"
import NavLink from "./navbar-links/navbar-links"
import {Menu} from "@mui/icons-material"
import './Header.css'


const Header = (props) => {
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
                    <NavLink href={props.href1} name={props.name1}/>
                    <NavLink href={props.href2} name={props.name2}/>
                    <NavLink href={props.href3} name={props.name3}/>
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
