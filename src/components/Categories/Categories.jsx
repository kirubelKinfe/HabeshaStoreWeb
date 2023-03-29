import { Link } from 'react-router-dom'
import { images } from '../../constants'
import './Categories.css'

const Categories = () => {
  return (
    <div>
      <div className="subContainers">
        <h1 className="titles">Catagories</h1>
        <h2 className="descriptions">You have got 3 catagories to choose from</h2>

        <div className="catagoriesView">
            <Link to="/men" className="catagorie">
              <img src={images.MenImage} alt="catagory" />
              <div className="catagorieItems">Men's</div>
            </Link>
            <Link to="/women" className="catagorie">
              <img src={images.WomenImage} alt="catagory" />
              <div className="catagorieItems">Women's</div>
            </Link>
            <Link to="/children" className="catagorie">
              <img src={images.ChildrenImage} alt="catagory" />
              <div className="catagorieItems">Children's</div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories