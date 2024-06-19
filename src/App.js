import  Navigation  from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/CheckOut/Checkout';
import Order from './customer/components/Order/Order';
import { AddressCard } from './customer/components/AddressCard/AddressCard';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
      <div>
       {/*<HomePage/>*/}
       {/*<Product/>*/}
       {/*<ProductDetails/>*/}
       {/*<Cart/>*/}
      {/* <Checkout/>*/}
       {/*<Order/>*/} 
        {/*<OrderDetails/>*/}

      </div>
    </div>
  );
}

export default App;