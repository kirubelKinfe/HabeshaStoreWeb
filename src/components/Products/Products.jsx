
import Product from '../Product/Product'


const Products = () => {
  return (
    <div>
        <a name="best-sellers"></a>
        <div className="products-view">
            <div className="products-view-title">Best Seller Products</div>
            <div className="products-view-desc">
                Those are our best selling products this year
            </div>
            <div className="products-list">
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
            </div>
        </div>
    </div>
  )
}

export default Products