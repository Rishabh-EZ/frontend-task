import React from 'react'
const Card = ({image, title, cardDetail}) => {
  return (
    <div className='card'>
        <div className='image-and-title'>
            <img src={image} alt={"research"} />
            <p>{title}</p>
        </div>
        <div className='card-detail'>{cardDetail} </div>  
    </div>
  )
}

export default Card