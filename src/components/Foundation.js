import React from 'react';
import India from '../components/assets/india.png';
import './styles/Foundation.css';
const Foundation = () => {
   
  return (
    <div className='foundation-container'>
      <div className="img-container">
        <img src={India} alt="india"  />
      </div>
      <div className="foundation-text">
        <h4>
                  Feed India Foundation, Inc. is a 501(c)(3) charitable organization whose mission is to alleviate poverty and hunger in the continent of Africa. We work to feed, empower, cloth, and provide basic amenities such as food, water, electricity, housing, and healthcare to the poorest of Africa.
        </h4>
      </div>
    </div>
  )
}

export default Foundation
