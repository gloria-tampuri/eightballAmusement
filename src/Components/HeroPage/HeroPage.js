import React from 'react'
import classes from './HeroPage.module.css'
import underline from '../../access/single stick 2.png'
import lady from '../../access/Woman-image.jpg'

const HeroPage = () => {
  return (
    <div >
       
       <div className={classes.Hero}>
       <h1>LET THE GAME BEGIN</h1>
        <img src={underline} alt='poolstick' className={classes.underline}/>
        <p className={classes.para}>We supply world class quality pool tables. At Eight Ball Amusement,  we believe that our customers should have the best pool playing experience.</p>

        <div className={classes.rates}>
            <div >
                <h3>50+</h3>
                <p>Tables</p>
            </div>

            <div >
                <h3>120+</h3>
                <p>Clients</p>
            </div>

            <div >
                <h3>200+</h3>
                <p>Events</p>
            </div>
        </div>

       <button className={classes.contactus}>Contact Us</button>
       </div>

       <img src={lady} alt='lady with pool stick' className={classes.lady}/>
    </div>
  )
}

export default HeroPage