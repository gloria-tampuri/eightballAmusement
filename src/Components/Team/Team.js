import React from 'react'
import classes from './Team.module.css'
import underline from '../../access/single stick 3.png'
import nti from '../../access/nti.jpg'
import jnr from '../../access/jnr.jpg'

const Team = () => {
  return (
    <div className={classes.team}>
         <h1>Our Team</h1>
      <div className={classes.stick}>
      <img src={underline} alt='underline' className={classes.stick}/>
      </div>

      <div className={classes.member}>
        <img src={nti} alt='richard'/>
        <h3> Richard Ababio</h3>
        <p className={classes.title}> Founder and Managing Director </p>
        <p className={classes.profile}>With over seven years experience in the pool business. Richard is a go getter and a result oriented Leader. He is passionate about the game experience and makes sure to provide world class quality tables and accessories so players can enjoy the game.</p>
      </div>

      <div className={classes.member}>
        <img src={jnr} alt='junior'/>
        <h3>Junior Ababio</h3>
        <p className={classes.title}>Operations Manager </p>
        <p className={classes.profile}>Junior is a hard working associate who is involved in the day to day operations of the tables. with over 2 years experience in the pool table business. Junior is a customer sactisfication oriented leader.</p>
      </div>
    </div>
  )
}

export default Team