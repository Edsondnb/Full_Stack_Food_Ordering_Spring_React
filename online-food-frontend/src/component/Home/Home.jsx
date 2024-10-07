import React from 'react'
import "./Home.css"
import { MultiItemCarousel } from './MultiItemCarousel'
import { RestaurantCard } from '../Restaurant/RestaurantCard'


const restaurant = [1,1,1,1,1,1,1]

export const Home = () => {

  return (

    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center
        items-center'>

            <div className="w-[50vw] z-10 text-center">
                <p className='text-4xl lg:text-6x1 font-bold py-5 z-10'>Ame Food</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4x1'>Taste the Convenience: Food, Fast and Delivered.</p>
            </div>
            <div className="cover absolute top-0 left-0 right-0">


            </div>
            <div className="fadout">

            </div>

        </section>
        <section className='p-10 lg:px-20'>
          <p className='text-2xl font-semibold text-gray-400 py-3
          pb-10'>Top Meels</p>
          <MultiItemCarousel/>
        </section>

        <section className='px-5 lg:px-20'>
          <div className="text-2xl font-semibold text-gray-400 py-3 ">
            <h1 className=''>Order form our Handpicked Favorites</h1>
          </div>

          <div>
            
          </div>
        </section>

        <RestaurantCard/>
        
    </div>

  )
}
