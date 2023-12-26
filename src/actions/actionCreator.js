import {
  INIT_FILTERS,
  INIT_PRODUCTS,
  INIT_FILTERED_PARAM,
  SET_FILTERED_LIST_PARAM,
  SET_FILTERED_SLIDER_PARAM,
  SET_FILTERED_PRODUCTS,
  INIT_FILTERED_PRODUCTS,
  RESET_FILTERED_PARAM
} from '../constants';

export const initFilters = (filters) => ({
  type: INIT_FILTERS,
  payload: filters
});

export const initProducts = (products) => ({
  type: INIT_PRODUCTS,
  payload: products
});

export const initFilteredProducts = (products) => ({
  type: INIT_FILTERED_PRODUCTS,
  payload: products
});

export const initFilteredParam = (filters) => ({
  type: INIT_FILTERED_PARAM,
  payload: filters
});

export const resetFilteredParam = (filters) => ({
  type: RESET_FILTERED_PARAM,
  payload: filters
});

export const setFilteredListParam = (filteredParam, filterData) => ({
  type: SET_FILTERED_LIST_PARAM,
  filterData: filterData,
  payload: filteredParam
});

export const setFilteredSliderParam = (filteredParam, typeFilter) => ({
  type: SET_FILTERED_SLIDER_PARAM,
  typeFilter: typeFilter,
  payload: filteredParam
});

export const setFilteredProducts = (products) => ({
  type: SET_FILTERED_PRODUCTS,
  payload: products
});
