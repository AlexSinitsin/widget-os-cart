import React from 'react';
import PropTypes from 'prop-types';

import './product.css';

const Product = ({ product }) => {

    return (
        <div className="product">
            <p><span>Название:</span>{product.name}</p>
            <p><span>Бренд:</span>{product.brand}</p>
            <p><span>Цвет:</span>{product.color}</p>
            <p><span>Цена:</span>{product.price}$</p>
        </div>
    )  
}

Product.propTypes = {
    product: PropTypes.object
}

Product.defaultProps = {
  product: {}
}

export default Product;