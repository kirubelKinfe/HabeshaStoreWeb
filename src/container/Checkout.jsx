import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../features/cartSlice'
import './Checkout.scss'
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
    <div className='w-full mt-28 flex flex-col justify-center transition-all'>
      <p className="flex self-center items-center gap-1 ml-3">
          <span className="ml-3 font-semibold text-2xl">Checkout</span>
          <span className="ml-3">({cartItems.length} items)</span>
      </p>
      <div className='w-full flex items-center justify-center gap-12'>
        <FormContainer />
        <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  )
}

export default Checkout