import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/${5}')} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6} >
                <div className='flex cursor-pointer'> 
                    <img  className='w=[5rem] h-[5rem] object-cover object-top'src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70' alt=''/>
                    <div className='ml-5 space-y-2'>                    
                        <p className=''>Caual shirt</p>
                        <p className='opacity:50 font-semibold text-xs '>Size:M</p>
                        <p className='opacity:50 font-semibold text-xs'>Black</p>


                    </div>

                </div>

            </Grid>
            <Grid item xs={2}>
                <p>rupees 199</p>

            </Grid>
            <Grid item xs={4}>
               {true &&  <div>
                <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2'/>
                    <span>
                        Delivered on March 03
                    </span>
                   
                </p>
                <p className='text-xs'>
                        Yor item has been delivered
                </p>
                </div> }
              {false &&  <p>
                    <span>
                        Expected Delivery on March 03
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard