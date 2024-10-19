import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between text-emerald-100 bg-gradient-to-r from-emerald-950 via-emerald-500 to-black rounded-lg shadow-md shadow-slate-600'>
        <h1 className='text-4xl p-4 ml-8 text-justify font-bold italic cursor-default'>VENINZUELA</h1>
        <ul className='flex m-6 mr-32 gap-32 text-justify font-poppins'>
          <li className='hover:underline hover:opacity-60'><Link href="">Home</Link></li>
          <li className='hover:underline hover:opacity-60'><Link href="">Contact</Link></li>
          <li className='hover:underline hover:opacity-60'><Link href="">Services</Link></li>
        </ul>
    </div>
  )
}

export default Header