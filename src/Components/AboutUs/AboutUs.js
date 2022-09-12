import React from 'react'
import classes from './AboutUs.module.css'
import underline from '../../access/single stick 3.png'

const AboutUs = () => {
  return (
    <div className={classes.AboutUs}>
        <h1>About Us</h1>
      <div className={classes.stick}>
      <img src={underline} alt='underline' className={classes.stick}/>
      </div>
    <p>
    We are a Ghana based company with our head office in Kumasi founded in 2020 by Richard Ababio. We started with a total of 3 tables and now we are proud owners of over 50 pool tables. We sell pool tables and also lease tables to amusement centers who want tables but cant afford. We also rent out tables for all kinds of events.   
    </p>
    </div>
  )
}

export default AboutUs