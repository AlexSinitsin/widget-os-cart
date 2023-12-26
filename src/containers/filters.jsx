import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { setFilteredProducts, resetFilteredParam } from '../actions/actionCreator';

import './filters.css';

import FilterList from '../components/filterList/filterList';
import FilterSlider from '../components/filterSlider/filterSlider';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, reset: 0 };
  }

  filtering = () => {
    const { filterParam, products } = this.props;
    let filteredProducts = products;
    for (const [typeFilterParam, paramData] of Object.entries(filterParam)) {
      if (
        (paramData.data.length > 0 && Array.isArray(paramData.data)) ||
        !Array.isArray(paramData.data)
      ) {
        filteredProducts = filteredProducts.filter((product) => {
          if (paramData.type === 'slider') {
            return (
              paramData.data.min <= product[typeFilterParam.toLowerCase()] &&
              product[typeFilterParam.toLowerCase()] <= paramData.data.max
            );
          } else if (paramData.type === 'list') {
            return paramData.data.includes(product[typeFilterParam.toLowerCase()]);
          } else return product;
        });
      }
    }
    store.dispatch(setFilteredProducts(filteredProducts));
  };

  reset = () => {
    const { products, filters } = this.props;
    store.dispatch(setFilteredProducts(products));
    store.dispatch(resetFilteredParam(filters));
    this.setState({ value: this.state.value + 1, reset: this.state.value + 1 });
  };

  render() {
    const { filters, filterParam } = this.props;

    return (
      <div className="filters">
        {filters.map((filter) => {
          if (filter.type === 'list') {
            return (
              <FilterList
                filterParam={filterParam[filter.display_name]}
                value={this.state.value}
                filterData={filter}
                filtering={this.filtering}
                key={filter.unique_id}
              />
            );
          } else if (filter.type === 'slider') {
            return (
              <FilterSlider
                reset={this.state.reset}
                filterData={filter}
                filtering={this.filtering}
                key={filter.unique_id}
              />
            );
          } else return filter;
        })}
        <button className="button-reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default connect(({ filters, filterParam, products }) => ({
  filters,
  filterParam,
  products
}))(Filters);
