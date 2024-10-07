import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {


  return (
    <Card className='m-5 w-[18rem]'>
        
        <div className={`${true?' cursor-pointer': "cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover'
            src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg" alt="" />

            <Chip
            size='small'
            className='absolute top-2 left-2'
            color={true?"success":"error"}
            label={true?"open":"closed"}
            >   
            </Chip>
        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
            <div className="space-y-1">
                <p className='font-semibold text-lg'></p>
                <p className='text-gray-500 text-sm'>
                    Craving it al l? Dive into our global fla...
                </p>
            </div>
            <div className="">
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>

        </div>

    </Card>

    


  )


}
