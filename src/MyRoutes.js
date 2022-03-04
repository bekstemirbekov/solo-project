import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import EditProduct from './Components/Admin/EditProduct/EditProduct';
import Home from './Components/Home/Home';

import MyNavbar from './Components/Admin/Header/MyNavbar'
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login'
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import Cart from './Components/Admin/Cart/Cart';
import Payment from './Components/Payment/Payment';
// import Footer from './Components/Footer';
// import MainPage from './Components/MainPage/MainPage';
import ProductsContextProvider from './Contexts/ProductContext';
import Main from './Main/Main';
import Star from './Components/Admin/Star/Star';





const MyRoutes = () => {
    return (
        <ProductsContextProvider>
             <BrowserRouter>
             <MyNavbar/>
             
            <Routes>
                <Route path='/add' element={<AddProduct/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/edit/:id' element={<EditProduct/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/star' element={<Star/>}/>
                <Route path='/detail/:id' element={<ProductDetail/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/pay' element={<Payment/>}/>
                <Route path='/main' element={<Main/>}/>
                
                {/* <Route path='/main' element={<MainPage/>}/> */}
                




            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
        </ProductsContextProvider>
       
    );
};

export default MyRoutes;