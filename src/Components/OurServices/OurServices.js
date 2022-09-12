import React from 'react'
import classes from './OurServices.module.css'
import underline from '../../access/single stick 3.png'
import group from '../../access/group-image.jpg'


const OurServices = () => {
  return (
    <div className={classes.OurServices}>
        
        <h1>Our Services</h1>
      <div className={classes.stick}>
      <img src={underline} alt='underline' className={classes.stick}/>
      </div>

      <div  className={classes.services}>

    <div className={classes.each}> 
    <div className={classes.bullet}></div>
    <h3>Selling of quality manufactured tables, with accessories from South Africa</h3>
    </div>  

     <div className={classes.each}> 
    <div className={classes.bullet}></div>
    <h3>Leasing of tables to businesses and amusement centers  </h3>
    </div>  

    <div className={classes.each}> 
    <div className={classes.bullet}></div>
    <h3>Renting out tables for events</h3>
    </div>  

    <div className={classes.each}> 
    <div className={classes.bullet}></div>
    <h3>Pool table repair and maintenance. Sale of accessories </h3>
    </div>    
        
      </div>
 
    <img src={group} alt='group pic' className={classes.group}/>

    </div>
  )
}

export default OurServices