import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-center bg-yellow-300 py-3'>
        <Link href={'/'}> Home </Link> | <Link href={'/product'}> Product </Link> | Course
    </div>
  )
}
