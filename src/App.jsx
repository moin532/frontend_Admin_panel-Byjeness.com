import React, { useEffect } from 'react'
import Home from './assets/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './assets/Navbar'
import Products from './compoenents/Products';
import Login from './assets/Login';
import {useDispatch,useSelector} from 'react-redux';
import { LoadUser } from './action/AllActon';
import Orders from './compoenents/Orders';
import Footer from './assets/Footer';
import Users from './compoenents/Users';
import Seller from './compoenents/Seller';
import Buyer from './compoenents/Buyer';
import ProductsDetails from './compoenents/ProductsDetails';

const App = () => {
  
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(LoadUser());
  },[dispatch]);



  return (
   <>

   <BrowserRouter>
     <Navbar/>

    <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/home" exact element={<Home/>} />
    <Route path="/products" exact element={<Products />} />
    <Route path="/product/:id" exact element={<ProductsDetails />} />
    <Route path="/Orders" exact element={<Orders />} />
    <Route path="/users" exact element={<Users />} />
    <Route path="/sellers" exact element={<Seller />} />
    <Route path="/buyers" exact element={<Buyer />} />


    </Routes>
   </BrowserRouter>
    
    {/* <Footer/> */}

   </>
  )
}

export default App
