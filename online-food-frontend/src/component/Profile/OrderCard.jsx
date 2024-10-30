import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className="flex items-center space-x-5">
            <img className='h-16 w-16' src="https://images.unsplash.com/photo-1508736793122-f516e3ba5569?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="">
                <p>Burger</p>
                <p>S/.15</p>
            </div>
        </div>
        <div>
            <Button desabled variant='cursor-not-allowed'>Completed</Button>
        </div>

    </Card>
  )
}
