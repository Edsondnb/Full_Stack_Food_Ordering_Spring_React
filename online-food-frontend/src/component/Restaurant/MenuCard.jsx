import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'


const demo = [
    { 
        category: "Nuts & Seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Ground Beef", "Bacon strips"]
    }
]

export const MenuCard = () => {

  const handleCheckBoxChange = (item) => {
    console.log("value")
  }

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
                src="https://cdn.pixabay.com/photo/2016/08/31/21/47/burger-1634705_1280.jpg" alt="" />
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
          <form action="">
            <div className="flex gap-5 flex-wrap">
              {
                demo.map((item) =>

                  <div className="">
                    <p>{item.category}</p>
                    <FormGroup>
                      {item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item)}/>} label={item} />) }
                      
                    </FormGroup>
                  </div>
                )
              }
            </div>
            <div className="pt-55">
              <Button type='submit' variant='contained' disabled={false}>{true? "Add to cart" : "Out of stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>

  )

}
