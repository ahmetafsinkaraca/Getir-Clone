import React, { useEffect, useState } from 'react'
import cardsData from '../api/cards.json'

function Cards() {
const [cards, setCards] = useState([])

useEffect(() => {

  setCards(cardsData)
}, [])
 
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 md:px-4  '>
      {cards && cards.map(card => (
        <div className='rounded-lg shadow-sm bg-white p-10 flex flex-col items-center text-center'>
          <img src= {card.image} className='w-[150px] h-[150px] mb-6'></img>
          <h3 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h3>
          <p className='text-md mt-2 text-gray-700'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
