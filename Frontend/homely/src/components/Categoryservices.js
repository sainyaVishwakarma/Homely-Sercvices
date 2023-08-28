import React from 'react'

import health from '../images/health.jpg';
import maintenance from '../images/maintenance.jpeg';
import cleaningservices from '../images/cleaningservices.jpg';
import outdoor from '../images/outdoor.jpg';
import '../styles/categoryservices.css';
import { Link } from 'react-router-dom';






const Categoryservice = () => {


    return (
        <div class="category">
            
 <div class="container">
   <form>
   
    <div class="row align-center offset-1 ">
      <p class="post-head-title">CATEGORIES</p>
       
      
    </div>
   <br></br>
    <div class="row align-center  offset-1 ">
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
         <div>
         <Link to="/HealthList" >
            <img src={health}  class="post-img"/></Link>
         </div>

         <div class="post-title">
           <span>Health</span>
         </div>
       <div class="post-icon">
         <i class="fas fa-music"></i>
       </div>
     </div>
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
     
       <div>
       <Link to="/MaintenanceList" >
            <img src={maintenance} class="post-img"/></Link>
       </div>
       <div class="post-title">
         <span>Maintenance & Repair</span>
       </div>
       <div class="post-icon">
         <i class="fas fa-hat-wizard"></i>
       </div>
     </div>
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
       <div>
       <Link to="/CleanerList" >
            <img src={cleaningservices} class="post-img"/></Link>
       </div>
       <div class="post-title">
           <span>Cleaning services</span>
       </div>
       <div class="post-icon">
           <i class="fas fa-guitar"></i>
       </div>
     </div>
   </div>

  

   <div class="row align-center offset-1">
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
         <div>
         <Link to="/OutdoorList" >
            <img src={outdoor}  class="post-img"/></Link>
         </div>
         <div class="post-title">
           <span>Outdoor Services</span>
         </div>
       <div class="post-icon">
         <i class="fas fa-microphone"></i>
       </div>
     </div>
     </div>
    
</form> 
     </div>
        </div>
    )
}

export default Categoryservice;
