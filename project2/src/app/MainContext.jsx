"use client"
import React, { createContext } from 'react'
let cartContext=createContext()
export default function MainContext({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
