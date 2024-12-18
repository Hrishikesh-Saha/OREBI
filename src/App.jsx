import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from './components/Layer/RouteLayout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';
import Contacts from './components/Pages/Contacts';
import Journal from './components/Pages/Journal';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ProductDetails from './components/Pages/ProductDetails';
import Cart from './components/Cart';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>

      <Route index element={<Home/>}></Route>
      <Route path='/products' element={<Shop/>}></Route>
      <Route path='/product/details' element={<ProductDetails/>}> </Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      <Route path='/journal' element={<Journal/>}></Route>
      <Route path='/sign/up' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
