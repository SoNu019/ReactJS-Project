import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import './Navbar.css'
import logo from './assets/imgages/logo.png'

const Cart = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
         } = useCart();
         if(isEmpty){
             return(
                <>
                <nav>
                <div id='logo'><img src={logo} alt="" /></div>
                <div><Link to="/home">Home</Link></div>
                <div><Link to="">About Us</Link></div>
                <div><Link to="">Contact</Link></div>
                <div><Link to="/">Logout</Link></div>
            </nav>
                <h1 style={{textAlign:'center', marginTop:200,fontSize:90,color:'blue'}}>Your Cart Is Empty </h1>
               
                </>
             )
            }
  return (
    <>   
     <nav>
      <div id='logo'><img src={logo} alt="" /></div>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="">About Us</Link></div>
        <div><Link to="">Contact</Link></div>
        <div><Link to="/">Logout</Link></div>
      </nav>

   <section className="py-4 container">
    <div className="row justify-content-center">
        <div className="col-12">
            <h5>Cart({totalUniqueItems}) total Items :({totalItems})</h5>
            <table className="table table-light table-hover m-1 text-center ">
                <tbody>
                {
                    items.map((item,index)=>{
                        return(
                        <tr key={index}> 
                        <td>
                            <img src={item.img} style={{height:'6rem'}} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                            <button type="button" class="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                            <button type="button" class="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                            <button type="button" class="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove Item</button>
                        </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        <div className="col-auto ms-auto" >
            <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div  className="col-auto">
            <button type="button" class="btn btn-danger ms-2"  onClick={()=>emptyCart()}>Clear Cart</button>
            <Link to='/home' class="btn btn-primary ms-2">Back</Link>
        </div>
    </div>
   </section>
   </>

  )
}

export default Cart
