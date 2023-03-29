import React from 'react'

const OrderSummary = ({cartItems, totalPrice}) => {
  return (
    <div className='order_summary'>
          <h1>Orders Summary</h1>
          {cartItems.length >= 1 && cartItems.map((item) => (
                <div className="checkout-product" key={item.id}>
                  <img src={item.img} className="checkout-product-image" />
                  <div className="checkout-item-desc">
                      <h5>{item.name}</h5>
                      <h4>x{item.quantity}</h4>
                      <h4>${item.totalPrice}</h4>
                  </div>
                </div>
              ))}
            <div className="checkout_total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
        </div>
  )
}

export default OrderSummary