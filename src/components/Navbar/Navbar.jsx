import { Link } from 'react-router-dom'
import CartImage from '../../assets/images/cart.png'
import './Navbar.css'
import { auth } from '../../constants/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectShowCart, setShowCart } from '../../features/cartSlice'
import { Cart } from '../index'
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../Search/Search'

const Navbar = () => {
  const cartItems = useSelector(selectItems);
  const showCart = useSelector(selectShowCart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    auth.signOut()
    navigate('/')
  }

  const setShowCartFun = () => {
    dispatch(
      setShowCart()
    )
  }

  return (
    <nav>
      <div className="mainNavbar">
        <div className="left">
          <div className="logo"><Link to="/">Habesha<span> Store</span></Link></div>
        </div>

        <div className="middle">
          <Search />
        </div>

        <div className='right'>
          {auth.currentUser 
            ? 
            <p onClick={logOut} className='signInLink'>{auth.currentUser?.displayName}</p> 
            :
            <Link className='signInLink' to="/login"> Sign In </Link>
          }
          <button type='button' className="cart-icon" onClick={setShowCartFun}>
              <img src={CartImage} alt="cart" />
              <div className='cartCount'>{cartItems.length}</div>
          </button>
        </div>
        
      </div>
      <div className="subNavbar">
        <div className='menu'><MenuIcon onClick=""  /></div>
        <Link to="/">All</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/children">Children</Link>
        <Link to="/Electronics">Electronics</Link>
        <Link to="/books">Books</Link>
        <Link to="/kitchen">Kitchen & Dining</Link>
        <Link to="/toys">Toys & Games</Link>
        <Link to="/grocery">Grocery & Gourmet Food</Link>
        <Link to="/bestsellers">Best Sellers</Link>
        <Link to="/newreleases">New Releases</Link>
      </div>
      {showCart && <Cart />}
    </nav>
    
  )
}

export default Navbar