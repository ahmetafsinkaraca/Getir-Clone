import React, { useState, useEffect } from 'react'
import ProductItem from './ui/ProductItem.js'
import Title from './ui/Title'
import products from '../api/products.json'

export default function Favorities() {

  const [favorities, setFavorities] = useState([])

  useEffect(() => {

    setFavorities(products)
  }, [])

  return (
    <div className="container">
      <Title>Favoriler</Title>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 rounded-lg overflow-hidden gap-0.1'>
        {favorities && favorities.map(product => <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}
