import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
                <p className='text-gray-500 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus consequuntur rem dolorem, animi aliquam distinctio laboriosam dolores quas reprehenderit reiciendis a possimus placeat recusandae. Repellendus excepturi nobis id quis!
                </p>

                <div className="space-y-3 mt-3">
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>Mumbai, Mahrstra</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>Mon-sun: 9:00 AM - 9:00 PM (Today)</span>
                    </p>
                </div>
            </div>
        </section>

        <Divider/>

        <section className='pt-[2rem] lg:flex relative'>

            <div className="space-y-10 lg:w-[20%] filter">
                <div className="box space-y-5 lg:sticky top-28">
                    <div className="">
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food 
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="space-y-5 lg:w-[80%] lg:pl-10">menu</div>

        </section>



    </div>

  )
}

export default RestaurantDetails