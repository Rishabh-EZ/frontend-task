import React from 'react'
import Card from './Card'
import CardData from '../CardData'
const Right = () => {
  return (
    <div className='right'>
        {CardData.map(card => (<Card key = {card.key} title = {card.title} image = {card.image} cardDetail = {card.cardDetail}/>))}
    </div>
  )
}

export default Right