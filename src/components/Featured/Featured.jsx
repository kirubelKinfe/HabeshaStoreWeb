import { images } from '../../constants'
import './Featured.scss'


const Featured = () => {
  return (
    <div className='subContainers'>
        <div className='titles'>Featured Product</div>
        <div className='descriptions'>This is the best product of this year</div>
        
        <div className='featuredProduct'>
            <div className='productTitle'>Nike Shoe</div>
            <div className='productFeature'>Just Do It</div>
            <div className='productCatagory'>Shoe</div>
            <button type='button' className='featuredButton'>Add to cart</button>
            <img className='product' src={images.FeaturedImage} alt='featured' />
            <div className='productDesc'>
                <div className='productDescTitle'>Description</div>
                <div className='productDescDetails'>
                    Get laced up for training, sport and lifestyle with the latest designs 
                    of men's shoes and sneakers from Nike.com.
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Featured