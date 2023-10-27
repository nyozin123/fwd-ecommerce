"use client"
import { CartContext } from '@/context/CartProvider'
import Link from 'next/link'
import React, { useContext } from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
    const {cartCount,setIsOpenCartPanel} =useContext(CartContext)
  return (
    <div className="flex items-center justify-between bg-violet-300 py-5 px-8 ">
        <div className="text-white text-lg font-bold">logo</div>
        <div className="flex gap-4">
          <Link href={"/favorite"}>Favorite Products</Link>
            <div className="relative w-fit">
                <span className="absolute text-sm -top-3 -right-2 p-1 text-center rounded-xl text-white bg-violet-500">{cartCount}</span>
        <AiOutlineShoppingCart size={28} className="text-violet-900 cursor-pointer" onClick={()=>setIsOpenCartPanel(true)} />
        </div>
        </div>
        
    </div>
  )
}

export default Header