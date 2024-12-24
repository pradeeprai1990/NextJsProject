"use client"
import React, { createContext, useEffect, useState } from 'react'
export let createLogin=createContext()
export default function LoginContext({children}) {
  let [login,setLogin]=useState(JSON.parse(localStorage.getItem("USER")) ?? null)  

  useEffect(()=>{
    localStorage.setItem("USER",JSON.stringify(login))
  },[login])

  let obj={login,setLogin}
  return (
    <createLogin.Provider value={obj}>
        {children}
    </createLogin.Provider>
  )
}
