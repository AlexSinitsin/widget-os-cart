import { INIT_PRODUCTS } from '../constants';

const products = (state = [], action) => {
  switch (action.type) {
    case INIT_PRODUCTS: {
      const items = action.payload;
      return [...state, ...items];
    }
    default:
      return state;
  }
};

export default products;
