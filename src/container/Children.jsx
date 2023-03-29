
import Product from '../components/Product/Product'
import { db } from '../constants/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react';

const Children = () => {
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
        <div class="titles">Children's Clothing</div>
        <div class="descriptions">Clothes and shoes for children</div>

        <div className="productsList">
            {products?.map((product) => {
                if(product.category === 'Children') {
                    return <Product key={product.storageKey} product={product} />
                }
            })}
        </div>
    </div>
  )
}

export default Children