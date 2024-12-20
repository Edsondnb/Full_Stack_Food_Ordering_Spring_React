import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';


const menu = [
    {title:"Orders", icon:<ShoppingBagIcon/>},
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Address", icon:<AddReactionIcon/>},
    {title:"Payments", icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications", icon:<NotificationsActiveIcon/>},
    {title:"Events", icon:<EventIcon/>},
    {title:"Home", icon:<HomeIcon/>},
    {title:"Logout", icon:<LogoutIcon/>},
    
]


export const ProfileNavigation = ({open, handleClose}) => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`)
  }


  return (
    <div>
        <Drawer 
            variant={isSmallScreen ? "temporary" : "permanent"} 
            onClose={handleClose} 
            open={isSmallScreen ? open : true} 
            anchor='left'
            sx={{zIndex: -1, position: "sticky"}}
        >
            <div className='w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col         justify-center text-xl gap-8 pt-16'>
              {menu.map((item, i)=> 
                <>
                  <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  {i!== menu.length-1 && <Divider/>}
                </>
              )}
            </div>
        </Drawer>
        
    </div>
  )
}
