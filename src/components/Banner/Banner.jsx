import { images } from '../../constants'



const Banner = () => {
  return (
    <div class="banner">
        <div>
            <p>Welcome to Habesha Store</p>
            <h1>Shopping Time</h1>
            <h3>Ontime Delivery</h3>
            <a href="#catagory"><button class="btn-catagories" role="button">Check Catagories</button></a>
        </div>
        <img class="banner-image" src={images.ImageBanner} />
    </div>
  )
}

export default Banner