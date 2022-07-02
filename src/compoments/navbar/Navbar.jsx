import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div className="topbar">
       <div className="topbarWrapper">
         
           <div className="topLeft">NAV</div>
           <div className="topCenter">
           <input name="email"  
              className="form-control" 
              type="text"
              placeholder='Recherchez des destination...' 
              value={''} 
              onChange={''}
              onBlur={''}
              />
           </div>
           <div className="topRight">
               
              
                   
                   <span className="topicons">1</span>
                
              
                
                 <img src="https://zupimages.net/up/22/14/s9dy.png" alt="" className="photoAccount" />
                 
             
             
            

            </div>
       </div>
  

    </div>
  )
}