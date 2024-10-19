import React from 'react'

const Hero = () => {
  return (
    <div  className='flex justify-center my-44 py-12 text-yellow-950 bg-gradient-to-r from-orange-700 via-yellow-400 to-orange-700 rounded-3xl shadow-xl shadow-slate-700'>
        <div className='flex flex-col justify-center cursor-default'>
            <h1 className=' text-5xl'>Visit To Experience The Royalness In The Home Town</h1>
            <h2 className='flex justify-center text-6xl my-8'>VISIT NOW!</h2>
            <button className='flex justify-center mx-auto px-2 py-1 bg-red-950 text-xl text-slate-50 border border-none rounded-full hover:opacity-80 hover:text-slate-300'>
                Locate
            </button>
        </div>
    </div>
  )
}

export default Hero