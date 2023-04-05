import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className='bg-[#4A6D7C] '>
      <div className='container mx-auto '>
      <div className='text-center py-3 text-[70px] text-white'>Welcome to our store</div>
      <div className='text-[35px] text-white text-center'>Please Purchase Something</div>
      <div>
        <Product/>
      </div>
    </div>
    </div>
  )
}

export default Home
