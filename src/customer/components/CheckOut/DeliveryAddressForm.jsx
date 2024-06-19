import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { AddressCard } from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address={
      FirstName:data.get("FirstName"),
      LastName:data.get("LastName"),
      Address:data.get("Address"),
      City:data.get("City"),
      State:data.get("State"),
      Zip:data.get("Zip"),
      Mobile:data.get("Phone Number")

    }
    console.log("address",address)

  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'> 
          <AddressCard/>
          <Button sx={{mt:2,bgcolor:'RGB(145 85 253'}} size='large' variant='contained'>
            Deliver here
          </Button>

          </div>

        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="FirstName"
                  name="FirstName"
                  label="FirstName"
                  fullWidth 
                  autoComplete='given-name'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="LastName"
                  name="LastName"
                  label="LastName"
                  fullWidth 
                  autoComplete='given-name'/>
                 

                </Grid>
                <Grid item xs={12} >
                  <TextField
                  required
                  id="Address"
                  name="Address"
                  label="Address"
                  fullWidth 
                  autoComplete='given-name'
                  multiline
                  rows={4}/>

                 

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="City"
                  name="City"
                  label="City"
                  fullWidth 
                  autoComplete='given-name'/>
                 

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="State"
                  name="State"
                  label="State/region"
                  fullWidth 
                  autoComplete='given-name'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="Zip"
                  name="Zip"
                  label="Zip/Postal code"
                  fullWidth 
                  autoComplete='shipping postal-code'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id="Phone Number"
                  name="Phone Number"
                  label="Phone Number"
                  fullWidth 
                  autoComplete='given-name'/>
                </Grid>

              </Grid>
              <Grid item xs={12} sm={6}>
                  <Button sx={{py:1.5,mt:2,bgcolor:"RGB(145,85 253)"}}
                  size='large'
                  variant='contained'
                  type='submit'>
                    Deliver Here
                  </Button>
                </Grid>
            </form>


          </Box>

        </Grid>

      </Grid>

    </div>
  )
}

export default DeliveryAddressForm