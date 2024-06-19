import React from 'react';
import CartItem from './CartItem';
import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate=useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2")

    // Add your checkout logic here
  };

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='cols-span-2'>
          {[1, 1, 1, 1].map((item) => <CartItem key={item} />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />
            <div className='space-y-3 font-semihold mb-10' >
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹499 </span>
              </div>
              <div className='flex justify-between pt-3'>
                <span>Discount</span>
                <span className=' text-green-600'>-₹300</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Delivery Charge</span>
                <span className=' text-green-600'>Free </span>
              </div>
              <div className='flex justify-between pt-3  font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹1278</span>
              </div>
            </div>
            <button onClick={handleCheckout}
              className='w-full mt-5' // Remove 'variant="contained"' since it's not applicable to regular button
              onClick={handleCheckout} 
              style={{
                padding: "2.5rem",
                paddingTop: "7rem",
                backgroundColor: "green",
              }}
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
