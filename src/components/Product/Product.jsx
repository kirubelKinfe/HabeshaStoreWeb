import './Product.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cartSlice";


const Product = ({ 
    product:{id,productName, productPrice, img, quantity} 
  }) => {
  
  const dispatch = useDispatch();
  // const cartItems = useSelector(selectItems)
 

  const addToCartFun = () => {
    dispatch(
      addToCart({
        id: id,
        name: productName,
        price: productPrice,
        img: img,
        quantity: quantity
      })
    )
  }


  return (
    <div className='productItem'>
        {/* <div className='productQuantity'>{quantity}</div> */}
        <div className='productImg'>
          <img src={img} alt="product" />
        </div>
        <div className='productInfo'>
          <div>
            <div className='productDescription'>{productName}</div>
            <div className='productPrice'>Br<span>{productPrice}</span> </div>
          </div>
          <button  className='cartButton' type='button' onClick={addToCartFun}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product