import { combineReducers } from 'redux';
import filters from './filters';
import products from './products';
import filterParam from './filterParam';
import filteredProducts from './filteredProducts';

const rootReducer = combineReducers({ filters, products, filterParam, filteredProducts });

export default rootReducer;
