// import React, {useState , useCallback}from 'react';
import India from '../components/assets/india.png';
import Logo from '../components/assets/foundation-logo.png';
import './styles/Foundation.css';
import {NavLink} from 'react-router-dom'
// import Review from './Review';


const Foundation = () => {
  return (
      <div className='foundation-Container'>
          <div className="img-Container">
        <img src={India} alt="india"  />
      </div>
      <div className="foundation-text">
        <h4>
                  Feed India Foundation, Inc. is a 501(c)(3) charitable organization whose mission is to alleviate poverty and hunger in the continent of Africa. We work to feed, empower, cloth, and provide basic amenities such as food, water, electricity, housing, and healthcare to the poorest of Africa.
        </h4>
        <div className="logo">
                  <img src={Logo} alt="foundation logo" />
                
                 <NavLink to="/review">click</NavLink>
                  
        </div>
        
      </div>
    </div>
  )
}

export default Foundation
