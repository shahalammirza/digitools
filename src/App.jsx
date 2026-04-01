import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Pricing from './Components/Pricing/Pricing'
import Product from './Components/Product/Product'
import Ready from './Components/Ready/Ready'
import Status from './Components/Status/Status'
import Steps from './Components/Steps/Steps'

const fetchData = async ()=>{
  const res = await fetch("/public/data.json");
  return res.json();
}

const dataPromise = fetchData();


function App() {
  const [carts, setCarts] = useState([]);
  console.log(carts)
  return (
    <>
    <NavBar carts={carts}></NavBar>

    <Banner></Banner>

    <Status></Status>

    <Product dataPromise={dataPromise} carts={carts} setCarts={setCarts}></Product>

    <Steps></Steps>

    <Pricing></Pricing>

    <Ready></Ready>

    <Footer></Footer>
      
    </>
  )
}

export default App
