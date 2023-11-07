import React from 'react';
import { connect } from 'react-redux';

import './products.css'

import Product from '../components/product/product';


const Products = ({ filteredProducts }) => {
    
    return (
      <div className="products">
        {filteredProducts.map((product, i) => {
            return <Product product={product} key={i}/>
        })}
      </div>
    );
}


export default connect(({ filteredProducts }) => ({
  filteredProducts
}))(Products);