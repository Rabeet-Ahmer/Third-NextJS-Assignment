import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <div className="flex flex-col text-black px-[10vh] cursor-default">
        <h1 className="font-semibold text-5xl font-serif italic">Hotel Veninzuela</h1>
        <ul className="flex flex-col mt-8 ml-8 list-disc font-sans">
        <li>We are now opening our 5 star hotel in your home town Karachi.</li>
        <li>This is your best choice to experience the greatest luxury in your whole life.</li>
        <li>We are offering early bird discounts for our first 30 customers</li>
        </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default page