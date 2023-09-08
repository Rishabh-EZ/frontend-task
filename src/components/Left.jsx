import React from 'react'
import Logo from '../media/EZ_LOGO.png';

const Left = () => {
  return (
    <div className='left'>
      <div className="logo">
      <img src={Logo} alt="Company-Logo" />
      </div>
      <p>Suite of Business Support Services</p>
      <div className='business-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
      
    </div>
  )
}

export default Left