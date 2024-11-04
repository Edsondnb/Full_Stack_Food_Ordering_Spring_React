
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Delete } from '@mui/icons-material';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width: 345}}>
            <CardMedia image='https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg'
            
            sx={{height: 345}}/>

            <CardContent>
                <Typography variant='h5' >
                    Indian Fast Food
                </Typography>
                <Typography variant='body2' >
                    50% off on your first order
                </Typography>
                <div className="py-2 space-y-2">
                  <p>{"munbai"}</p>
                  <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
                  <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
                </div>
            </CardContent>

            {true && <CardActions>
              <IconButton>
                <Delete/>
              </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

