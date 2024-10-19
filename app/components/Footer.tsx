import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col mx-0 mt-[25vh]'>
      <div className='flex justify-around text-emerald-100 bg-gradient-to-r from-emerald-950 via-emerald-500 to-black rounded-2xl p-4 shadow-md shadow-slate-600 '>
          <p className=' pt-6 hover:cursor-default '>© GIAIC All Rights Reserved 2024</p>
          <ul>
            <li className='hover:underline hover:opacity-60'><Link href="">Facebook</Link></li> 
            <li className='hover:underline hover:opacity-60'><Link href="">Linkedin</Link></li>
            <li className='hover:underline hover:opacity-60'><Link href="">Git Hub</Link></li>
          </ul>
          <ul>
            <li className='hover:underline hover:opacity-60'><Link href="">Privacy Policy</Link></li>
            <li className='hover:underline hover:opacity-60'><Link href="">Terms and Conditions</Link></li>
            <li className='hover:underline hover:opacity-60'><Link href="">Contact Us</Link></li>
          </ul>
        </div>
    </div>    
  )
}

export default Footer