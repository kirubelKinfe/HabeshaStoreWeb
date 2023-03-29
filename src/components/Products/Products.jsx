import './Products.css'
import Product from '../Product/Product'
import { db } from '../../constants/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);
  const productsRef = collection(db, "Products");

  const getProducts = async () => {
    const data = await getDocs(productsRef);
    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  
  useEffect(() => {
    getProducts()
  }, [products, productsRef])
  
  return (
        <div className="subContainers">
            <div className="titles">Best Seller Products</div>
            <div className="descriptions">
                Those are our best selling products this year
            </div>
            <div className="productsList">
              {products?.map((product) => (
                <Product key={product.storageKey} product={product} />
              ))}
            </div>
        </div>
  )
}

export default Products