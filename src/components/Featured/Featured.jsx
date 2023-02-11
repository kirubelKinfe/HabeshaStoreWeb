import { images } from '../../constants'



const Featured = () => {
  return (
    <div>
        <div class='products-view-title'>Featured Product</div>
        <div class='products-view-desc'>This is the best product of this year</div>
        
        <main class='container'>
            <form action='index.php' method='post'>
                <div id='featured' class='featured-product'>
            <div class='product-title'>Nike Shoe</div>
            <div class='product-feature'>Just Do It</div>
            <div class='product-catagory'>Shoe</div>
            <button type='submit' name='add' class='featured-button'>Add to cart</button>
            <img class='product' src={images.FeaturedImage} alt='featured-shoe' />
            <div class='product-desc'>
            <div class='product-desc-title'>Description</div>
            <div class='product-desc-details'>
                Get laced up for training, sport and lifestyle with the latest designs 
                of men's shoes and sneakers from Nike.com.
            </div>
           </div>
                </div>
            </form>
        </main>
    </div>
    
  )
}

export default Featured