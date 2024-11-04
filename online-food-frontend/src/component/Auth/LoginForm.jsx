import { TextField, Typography } from '@mui/material'
import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'

const initialValues = {
  email: "",
  password: ""
}

export const LoginForm = () => {

  const handleSubmit = () => {

  }

  return (
    <div>

      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          
        </Form>
      </Formik>


    </div>
  )
}
