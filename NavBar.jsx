import React from 'react'
import './Navbar.css'
import logo from './assets/imgages/logo.png'
import fruit1 from './assets/imgages/Fruit_Basket.png'
import fruit2 from './assets/imgages/Exotic_Strawberry.png'
import fruit3 from './assets/imgages/fruit.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <nav>
   <div id='logo'><img src={logo} alt="" /></div>
    <div><Link to="/login">Login</Link></div>
    <div><Link to="/registration">Registration</Link></div>
  </nav>

  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={fruit1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fruit2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fruit3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default NavBar
