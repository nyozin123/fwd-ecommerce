"use client"
import { ProductContext } from '@/context/ProductsProvider'
import React, { useContext } from 'react'
import ProductCard from '@/components/utils/ProductCart'

const ForYouProducts = () => {
    const {forYouProducts}=useContext(ProductContext)
  return (
    <div className="my-12">
        <h2 className="text-lg font-semibold">For You Products</h2>

    <div className="flex flex-wrap gap-y-5 mt-5">
        
        {forYouProducts.map(product=>(
   <ProductCard key={product.id} product={product}/>
            
        ))}
    </div>
    </div>
  )
}

export default ForYouProducts