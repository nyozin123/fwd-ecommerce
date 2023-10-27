"use client"
import React, { createContext, useEffect, useState } from 'react'

export const CartContext=createContext()

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [isOpenCartPanel, setIsOpenCartPanel] = useState(false)
    const [cartCalculate, setCartCalculate] = useState(0)

    useEffect(() => {
      setCartCount(cartProducts.length)
    }, [cartProducts])

    useEffect(() => {
      let cartTotalCost = 0;
      cartProducts.forEach((product) => {
        const eachProductCost = product.discountAmount
          ? product.discountAmount * product.orderQuantity
          : product.price * product.orderQuantity;
        cartTotalCost += eachProductCost;
      });
      console.log({ cartTotalCost });
      setCartCalculate(cartTotalCost)
    }, [cartProducts]);
    
    const addCard=(product)=>{
      const isExitCard=cartProducts.find((pro)=>pro.id===product.id)
      if (isExitCard) {
        return
      }else{
        setCartProducts([...cartProducts,product])
      }
    }

    const CartUpdate=(update_product)=>{
      const UpdateProduct=cartProducts.map(product=>{
        if (product.id==update_product.id) {
          return update_product
        }else{
          return product
        }
      })
      setCartProducts([...UpdateProduct])
    }

    const removeCart=(product_id)=>{
      const deleteProduct=cartProducts.filter(product=>product.id !==product_id)
      setCartProducts([...deleteProduct])
    }

    const AddAllFavoriteProductsToCart=(favoriteProducts)=>{
      let checkFavoriteProducts = [];
      favoriteProducts.forEach((product) => {
        const isExit = cartProducts.find((p) => p.id == product.id);
        if (!isExit) {
          product.orderQuantity = 1;
          if (product.discountPercentage) {
            product.discountAmount = Math.round(
              product.price - product.price * (product.discountPercentage / 100)
            );
          }
          checkFavoriteProducts.push(product);
        }
      });
      setCartProducts([...cartProducts, ...checkFavoriteProducts]);
    }

  return (
    <CartContext.Provider value={{cartProducts,cartCount,addCard,isOpenCartPanel,setIsOpenCartPanel,CartUpdate,cartCalculate,removeCart,AddAllFavoriteProductsToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider