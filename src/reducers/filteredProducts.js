import { SET_FILTERED_PRODUCTS, INIT_FILTERED_PRODUCTS } from '../constants';

const filteredProducts = (state = [], action) => {
  switch (action.type) {
    case INIT_FILTERED_PRODUCTS: {
      const products = action.payload
      return products
    }
    case SET_FILTERED_PRODUCTS: {
        const products = action.payload
        return products
    }
    default:
      return state;
  }
}

export default filteredProducts;