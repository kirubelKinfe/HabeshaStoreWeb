import CartImage from '../../assets/images/cart.png'
import './Navbar.css'

const Navbar = () => {
  return (
<nav class="navbar">
      <div class="left">
        <div class="logo">
          <a href="index.php">Habesha<span> Store</span></a>
        </div>
      </div>
      <div class="middle">
        <ul>
          <li>
            <a href="#home" id="h">Home</a>
          </li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>
            <a href="#best-sellers">Best Sellers</a>
          </li>
          <li>
            <a href="#catagories">Catagories</a>
          </li>
          
        </ul>
      </div>

      <a class="cart" href="cart.php">
          <img src={CartImage} />
          <div class='cart-count'>0</div>
          {/* <?php 
            if(isset($_SESSION['cart'])) {
              $count = count($_SESSION['cart']);
              echo "<div class='cart-count'>$count</div>";
            } else {
              echo "<div class='cart-count'>0</div>";
            }
          ?> */}
          
      </a>
  </nav>
  )
}

export default Navbar