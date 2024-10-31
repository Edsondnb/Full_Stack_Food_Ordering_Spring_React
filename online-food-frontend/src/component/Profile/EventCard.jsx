
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const EventCard = () => {
  return (
    <div>
        <Card>
            <CardMedia image='https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg'
            
            sx={{height: 345}}/>

            <CardContent>
                <Typography variant='h5' component={'div'}>
                    Indian Fast Food
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

