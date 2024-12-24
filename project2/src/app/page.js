"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [count,setCount]=useState(1)
  return (
    <div className="flex justify-center ">
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Change Count</button>
    </div>
  );
}
