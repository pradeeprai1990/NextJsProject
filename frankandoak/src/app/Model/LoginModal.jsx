import React from 'react'
import { IoMdClose } from "react-icons/io";

export default function LoginModal({setLoginModalStatus}) {
  return (
    
    <div className="lg:w-[500px] h-[90vh] border-2 shadow-2xl bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <IoMdClose onClick={()=>setLoginModalStatus(false)} className='absolute right-[10px] top-[10px] text-3xl cursor-pointer' />

    </div>
  )
}
