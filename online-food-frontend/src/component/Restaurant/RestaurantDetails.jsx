import { Grid } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const RestaurantDetails = () => {
  return (

    <div className="px-5 lg:px-20">

        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/india/inidian fast food/3</h3>
            <div className="">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </Grid>
                
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </Grid>
                </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae maxime maiores natus ut dicta impedit, reprehenderit laboriosam quia suscipit repudiandae, explicabo delectus in quas. Officia animi eligendi consequuntur quo saepe.</span>
                </p>
            </div>
        </section>

    </div>

  )
}

export default RestaurantDetails