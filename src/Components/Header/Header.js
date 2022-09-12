import React from 'react'
import classes from './Header.module.css'
import logo from '../../access/8Ball Amusement  Logo.png'

const Header = () => {
  return (
    <div className={classes.header}>
        <img src={logo} alt='8Ball Logo'/>
    </div>
  )
}

export default Header