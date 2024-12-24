"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetails() {
 let [productDetails,setProductDetails]=useState(null)  
  let {id}=useParams();  //Object {id:1} 

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>res.data)
    .then((finalRes)=>{
        setProductDetails(finalRes)
    })
  },[id])
 
  return (
    <div>
        {productDetails!==null ?

            <>
                <h1 className='text-3xl text-center py-5'>{productDetails.title}</h1>

                <div className='max-w-[1320px] mx-auto grid grid-cols-2'>
                    <div>
                        <img src={productDetails.thumbnail} alt="" />
                    </div>
                    <div>
                        <h4>{productDetails.title}</h4>
                        <p>Des</p>
                        <p>{productDetails.price}</p>
                    </div>
                </div>
            </>
            :
            ''
    
    
    
        }
        
    </div>
  )
}
