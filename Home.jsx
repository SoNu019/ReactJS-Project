import React from 'react'
import './Navbar.css'
import ItemCard from './ItemCard'
import data from './data';
import logo from './assets/imgages/logo.png'
import { CartProvider } from 'react-use-cart'
import Cart from './Cart';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <nav>
      <div id='logo'><img src={logo} alt="" /></div>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="">About Us</Link></div>
        <div><Link to="">Contact</Link></div>
        <div><Link to="/">Logout</Link></div>
      </nav>

      <h1 id='items' className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
            {data.productData.map((item,index)=>{
        return(
        <ItemCard 
        img={item.img}
         title={item.title} 
         desc={item.desc} 
         price={item.price} 
         item={item}
         key={index}/>
            )
            })}
        </div>
      </section>
     
    </>
  )
}

export default Home
