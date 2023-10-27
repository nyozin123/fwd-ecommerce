"use client"
import randomItem from 'random-item'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const [forYouProducts, setForYouProducts] = useState([])
  const [favoriteProducts, setFavoriteProducts] = useState([])

  const ForYouProduct = (products_array) => {
    let forU = []
    while (forU.length != 8) {
      const randProduct = randomItem(products_array);
      const isExist = forU.find((item) => item.id == randProduct.id);
      if (!isExist) {
        forU.push(randProduct);
      }
    }
    setForYouProducts([...forU])
  }

  const AddFavoriteProducts=(product)=>{
    
    const isExitCard=favoriteProducts.find((pro)=>pro.id===product.id)
    if (isExitCard) {
      return
    }else{
      setFavoriteProducts([...favoriteProducts,product])
    }
    
  
  }

  const RemoveProduct=(product_id)=>{
    const failterProduct=favoriteProducts.filter(product=>product.id!==product_id)
    setFavoriteProducts([...failterProduct])
  }

  const loadProduct = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const { products } = await res.json()
    console.log(products);
    ForYouProduct(products)
    setProducts([...products]);
    const productFilter = products.filter((product) => product.rating > 4.5);
    const pProduct = productFilter.slice(0, 4);

    setPopularProducts([...pProduct]);
    // const forYouProductsFilter=products.filter((pt)=> pt.id < 9)
    // console.log(forYouProductsFilter);
    // setForYouProducts([...forYouProductsFilter])
  }

  useEffect(() => {
    loadProduct()
  }, [])

  return (
    <ProductContext.Provider value={{ products, popularProducts, forYouProducts,favoriteProducts,AddFavoriteProducts,RemoveProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider