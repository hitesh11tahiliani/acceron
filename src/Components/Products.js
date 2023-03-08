import React from 'react'
import '../Styles/Product.css'
// import banner from '../Assets/banner_products.png';

import ProductItem from "./ProductItem";
import { ProductList } from './ProductList';

function Products() {
  return (
    <>
    {/* <div >
      <img className='banner_product' src={banner} alt="banner"></img>
    </div> */}
    
      <div className="productList product">
          {ProductList.map((productItem, key) => {
            return (
              <ProductItem
                key={key}
                image = {productItem.image}
                name={productItem.name}
                capacity={productItem.capacity}
                price={productItem.price}
              />
            );
          })}
        </div>
      
    </>
  )
}

export default Products