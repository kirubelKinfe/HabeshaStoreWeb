import { useDispatch, useSelector } from "react-redux"
import CartItem  from "./CartItem"
import { selectItems, selectShowCart, selectTotalPrice, selectTotalQuantity, setShowCart } from "../../features/cartSlice"
import './Cart.css'

import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { decrementCartQuantity, incrementCartQuantity, removeFromCart } from "../../features/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";


const Cart = () => {
  const cartItems = useSelector(selectItems)
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  const [ quantityField, setQuantityField ] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    setTotalPrice(0)
    cartItems.map((item) => {
      setTotalPrice(prevPrice => prevPrice += item.totalPrice)
    })
  }, [cartItems])

  const removeFromCartFun = (id) => {
      dispatch(
          removeFromCart(id)
      )
  }

  const decrementQuantity = (id) => {
      dispatch(
          decrementCartQuantity({
              id, quantityField
          })
      )
  }

  const incrementQuantity = (id) => {
      dispatch(
          incrementCartQuantity({
              id,
              quantityField
          })
      )
  }


  const checkout = () => {
    navigate("/checkout")
    dispatch(setShowCart())
  }
  


  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => dispatch(setShowCart())}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({cartItems.length} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => dispatch(setShowCart())}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="cart-product" key={item.id}>
            <img src={item.img} className="cart-product-image" />
            <div className="item-desc">
              <div className="flex top">
                <h5>{item.name}</h5>
                
                <button
                  type="button"
                  className="remove-item"
                  onClick={() => removeFromCartFun(item.id)}
                >
                  <TiDeleteOutline />
                </button>
              </div>
              <div className="flex middle">
                <div>
                <p className="quantity-desc">
                  <span className="minus" onClick={() => decrementQuantity(item.id)}>
                  <AiOutlineMinus />
                  </span>
                  <input className="num" onClick={e => setQuantityField(e.target.value)} value={quantityField} />
                  <span className="plus" onClick={() => incrementQuantity(item.id)}><AiOutlinePlus /></span>
                </p>
                </div>
              </div>
              <div className="flex bottom">
                <h4>x{item.quantity}</h4>
                <h4>${item.totalPrice}</h4>
              </div>
            </div>
          </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={checkout}>
                Processed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart