import { images } from '../../constants'


const Categories = () => {
  return (
    <div>
      <a name="catagories"></a>
      <div class="catagories">
        <a name='catagory'></a>
        <div class="catagories-title">Catagories</div>
        <div class="catagories-desc">
          You have got 3 catagories to choose from
        </div>
        <div class="catagories-view">
            <a href="men.php">
            <div class="catagorie">
              <img class="thumbnail" src={images.MenImage} alt="" />
              <div class="men-catagorie">Men's</div>
            </div>
            </a>
            <a href="women.php">
                <div class="catagorie">
                    <img class="thumbnail" src={images.WomenImage} alt="" />
                    <div class="men-catagorie">Women's</div>
                </div>
            </a>
            <a href="electronics.php">
                <div class="catagorie">
                    <img class="thumbnail" src={images.ChildrenImage} />
                    <div class="men-catagorie">Children's</div>
                </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Categories