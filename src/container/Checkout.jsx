import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../features/cartSlice'
import './Checkout.css'
import OrderSummary from '../components/CheckoutComponents/OrderSummary'
import FormContainer from '../components/CheckoutComponents/FormComponents/FormContainer'

const Checkout = () => {
  const cartItems = useSelector(selectItems)
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(0)
    cartItems.map((item) => (
      setTotalPrice(prevPrice => prevPrice += item.totalPrice)
    ))
  }, [cartItems])

  return (
    <div className='checkout_wrapper'>
      <p className="checkout_heading">
          <span className="heading">Checkout</span>
          <span className="checkout_num_items">({cartItems.length} items)</span>
      </p>
      <div className='checkout_container'>
        <FormContainer />
        <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  )
}

export default Checkout