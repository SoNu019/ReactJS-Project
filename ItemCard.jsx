import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const ItemCard = (props) => {
const {addItem}=useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div class="card p-0 overflow-hidden h-100 shadow" >
   <img src={props.img} class="card-img-top img-fluid h-100" alt=""/>
   <div class="card-body text-center">
  <h5 class="card-title">{props.title}</h5>
  <h5 class="card-text"> $ {props.price}</h5>
  <p class="card-text">{props.desc}</p>
  <Link  to='/cart' class="btn btn-success" onClick={()=>addItem(props.item)}>Add to Cart</Link>
</div>
</div>
  </div>
  )
}

export default ItemCard



