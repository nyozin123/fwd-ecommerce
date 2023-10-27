"use client"
import { CartContext } from '@/context/CartProvider'
import React, { useContext } from 'react'
import CartPanel from './CartPanel'

const Cart = () => {
    const {isOpenCartPanel} = useContext(CartContext)
  return (
    <>
    {isOpenCartPanel&&<CartPanel/>}
    </>
  )
}

export default Cart