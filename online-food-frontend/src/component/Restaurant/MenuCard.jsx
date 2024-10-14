import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'

const ingredients = [
    { 
        category: "Nuts & Seeds",
    }
]

export const MenuCard = () => {

  return (

    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className="w-[7rem] h-[7rem] object-cover"
                src="" alt="" />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className='fonsemibold text-xl'>Burger</p>
                    <p>S/.49</p>
                    <p className='text-gray-500'>nice food</p>
                    <p>A hamburger or simply burger is a food consisting of fillings—usually a patty of ground meat,
                    typically beef—placed inside a sliced bun or bread roll</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>

  )

}
