"use client";
import axios from 'axios';
import { Card } from 'flowbite-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Product() {
    let [product,setProduct]=useState([])
    let getProduct=()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>res.data)
        .then((finalres)=>{
            setProduct(finalres.products)
        })
    }

    useEffect(()=>{
        getProduct()
    },[])
    return (
        <div>
            <h1 className='text-center font-bold py-4 text-3xl mb-5'>Our Product</h1>

            <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
              {product.length>=1 ?
                    product.map((items,index)=><ProductItems key={index} data={items}/>)  
                    :
                    ''
            
            }
              
                
               
               
            </div>
        </div>
    )
}

function ProductItems({data}){
    let {thumbnail,title,price,id}=data
    return(
        <Card
        className="max-w-sm"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={thumbnail}
    >
        <Link href={`/product/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
        </Link>
    
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
                Add to cart
            </a>
        </div>
    </Card>
    )
}