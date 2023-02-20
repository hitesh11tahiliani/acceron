import React from 'react'
import '../Styles/Product.css'
// import onel_15w40 from '../Assets/1l_15w40.png';
// import onel_90 from '../Assets/1l_90.png';
// import onel_conc_cool from '../Assets/1l_conc_coolant.png';
// import onel_rm_cool from '../Assets/1l_rm_coolant.png';
// import threel15_40 from '../Assets/3l_15w40.png';
// import threel_conc_cool from '../Assets/3l_conc_coolant.png';
// import fivel15w40 from '../Assets/5l_15w40.png';
// import fivel20w40 from '../Assets/5l_20w40.png';
// import fivel_90 from '../Assets/5l_90.png';
// import fivel_140 from '../Assets/5l_140.png';
// import fivel_conc_cool from '../Assets/5l_conc_coolant.png';
// import fivel_transmission from '../Assets/5l_transmission.png';
// import sevenl_15w40 from '../Assets/7.5l_15w40.png';
// import sevenl_20w40 from '../Assets/5l_20w40.png';
// import tenl_20w40 from '../Assets/10l_20w40.png';
// import tenl_90 from '../Assets/10l_90.png';
// import syn from '../Assets/15w50_syn.png';
// import fork_oil from '../Assets/fork_oil.png';
// import lg_greace from '../Assets/lg_greace.png';
// import sm_greace from '../Assets/sm_greace.png';
import banner from '../Assets/banner_products.png';

import ProductItem from "./ProductItem";
import { ProductList } from './ProductList';

function Products() {
  return (
    <>
    {/* <div >
      <img className='banner_product' src={banner} alt="banner"></img>
    </div> */}
    
      <div className="menuList menu">
          {ProductList.map((productItem, key) => {
            return (
              <ProductItem
                key={key}
                // image={productItem.image}
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