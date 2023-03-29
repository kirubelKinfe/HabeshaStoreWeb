import { useState } from "react"
import { useDispatch } from "react-redux";
import { decrementCartQuantity, incrementCartQuantity, removeFromCart } from "../../features/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";


const CartItem = ({ item:{ id, name, totalPrice, price, quantity, cartQuantity, img}}) => {
    const [ quantityField, setQuantityField ] = useState(1);
    const dispatch = useDispatch();

    const removeFromCartFun = () => {
        dispatch(
            removeFromCart(id)
        )
    }

    const decrementQuantity = () => {
        dispatch(
            decrementCartQuantity({
                id, quantityField
            })
        )
    }

    const incrementQuantity = () => {
        dispatch(
            incrementCartQuantity({
                id,
                quantityField
            })
        )
    }


    return (
        <div className="product" key={id}>
              <img src={img} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{name}</h5>
                  <h4>${price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={incrementQuantity}>
                    <AiOutlineMinus />
                    </span>
                    <input className="num" onClick={e => setQuantityField(e.target.value)} value={quantityField} />
                    <span className="plus" onClick={decrementQuantity }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeFromCartFun(id)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
  )
}

export default CartItem