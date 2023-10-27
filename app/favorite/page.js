"use client"
import FavoritePage from '@/components/FavoritePage'
import AddToCartAllProducts from '@/components/FavoritePage/AddToCartAllProducts'

import { ProductContext } from '@/context/ProductsProvider'
import React, { useContext } from 'react'

const Favorite = () => {
const {favoriteProducts} = useContext(ProductContext)

  return (
    <div className="container mx-auto px-4 mt-5">
    <h1 className="text-lg font-bold">Favourite Items <span>{favoriteProducts.length}</span></h1>
    {favoriteProducts.length>0 && <AddToCartAllProducts/>}
    <FavoritePage/>
    </div>
  )
}

export default Favorite