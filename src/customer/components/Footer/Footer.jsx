import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid
                className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Jobs</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Support</Typography>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Contact Us</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>FAQs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Shipping</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Returns</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Privacy Policy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Terms of Service</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Cookie Policy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Accessibility</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Follow Us</Typography>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Facebook</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Twitter</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>Instagram</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>LinkedIn</Button>
                    </div>
                </Grid>

                <Grid item xs={12} className='pt-5'>
                    <Typography variant="body2" component="p" align="center">
                        &copy; {new Date().getFullYear()} All rights reserved by My Company
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made by Sarikonda Lakshmi Devi
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
