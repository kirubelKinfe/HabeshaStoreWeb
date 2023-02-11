import { images } from '../../constants'


const Product = () => {
  return (
    <div>
      <div className='product-item'>
          <div className='product-img'>
            <img className='thumbnail' src={images.ProductImage} alt="product" />
          </div>
          <div className='product-info'>
            <div className='product-info-desc'>
              <div className='product-description'>T-shirt</div>
              <div className='product-price'>Br<span>2000</span> </div>
            </div>
            <button className='cart-button'>Add to cart</button>
            
          </div>
      </div>
    </div>
  )
}

export default Product