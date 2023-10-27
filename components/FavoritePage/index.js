"use client"
import { ProductContext } from '@/context/ProductsProvider'
import React, { useContext } from 'react'
import ProductCard from '../utils/ProductCart'
import EmptyFavorite from './EmptyFavorite'

const FavoritePage = () => {
    const {favoriteProducts} = useContext(ProductContext)
    
  return (
    <div className="flex flex-wrap gap-y-5 mt-5 ">
     {favoriteProducts.map(product=>(
        <ProductCard product={product} key={product.id+"favourite"}/>
     )
        )}
        {favoriteProducts.length<=0 &&<EmptyFavorite/>}
    </div>
  )
}

export default FavoritePage