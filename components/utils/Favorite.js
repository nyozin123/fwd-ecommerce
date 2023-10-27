"use client"
import { ProductContext } from '@/context/ProductsProvider';
import React, { useContext, useState,useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Favorite = ({product}) => {
const {AddFavoriteProducts,RemoveProduct,favoriteProducts} = useContext(ProductContext)
  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    const isFindProduct=favoriteProducts.find((pt)=>pt.id==product.id)
  if (isFindProduct) {
    setIsFavorite(true)
  }
   
  }, [favoriteProducts,product.id])
  
  const onClickFavoriteHandler=()=>{
    
    if (!isFavorite) {
      AddFavoriteProducts(product)
  
     
    }else{
      RemoveProduct(product.id)
      
    }
    setIsFavorite(!isFavorite)
  }
  return (
    <button className="absolute top-2 right-2" onClick={()=>onClickFavoriteHandler()}>
{
  isFavorite ?(<AiFillHeart size={24} className="text-violet-900 cursor-pointer"  />)
  :
  (<AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" />)
}
    </button>
  )
}

export default Favorite
