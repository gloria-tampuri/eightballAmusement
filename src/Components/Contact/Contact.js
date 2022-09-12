import React from 'react'
import classes from './Contact.module.css'
import underline from '../../access/single stick 3.png'
import email from '../../access/clarity_email-solid.png'
import location from '../../access/carbon_location-filled.png'
import call from '../../access/fluent-emoji-high-contrast_telephone-receiver.png'
const Contact = () => {
  return (
    <div className={classes.contact}>
         <h1>Contact</h1>
      <div className={classes.stick}>
      <img src={underline} alt='underline' className={classes.stick}/>
      </div>

      <div className={classes.showContact}>
        <div className={classes.cont}><img src={email} alt='email'/> <p>eightballsamusement@gmail.com</p></div>
        <div className={classes.cont}> <img src={call} alt='call'/> <p>024 583 0990</p></div>
        <div className={classes.cont}> <img src={location} alt='location icon'/> <p>AS-232-2323 Dediako-KNUST, Kumasi</p></div>

        
      </div>
    </div>
  )
}

export default Contact