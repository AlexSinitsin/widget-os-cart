import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { setFilteredProducts } from '../actions/actionCreator';

import './filters.css'

import FilterList from '../components/filterList/filterList'
import FilterSlider from '../components/filterSlider/filterSlider'

class Filters extends Component {

    filtering = () => {
        const { filterParam, products } = this.props;
        let filteredProducts = products
        for(const [typeFilterParam, arrParam] of Object.entries(filterParam)) {
            if(arrParam.length > 0) {
                filteredProducts = filteredProducts.filter(product => {
                    if(typeof product[typeFilterParam.toLowerCase()] === 'number') {
                        return (arrParam[0] <= product[typeFilterParam.toLowerCase()] && product[typeFilterParam.toLowerCase()] <= arrParam[1])
                    } else {
                        return arrParam.includes(product[typeFilterParam.toLowerCase()])
                    }
                })
            }
        }
        store.dispatch(setFilteredProducts(filteredProducts))
    }

    render() {
        const { filters, filterParam } = this.props;
    
        return (
          <div className="filters">
            {filters.map((filter) => {
                if(filter.type === 'list') {
                    return <FilterList filterParam={filterParam} filterData={filter} filtering={this.filtering} key={filter.unique_id}/>
                } else if (filter.type === 'slider') {
                    return <FilterSlider filterData={filter} filtering={this.filtering}  key={filter.unique_id}/>
                } else return filter
            })}
          </div>
        );
    }
}


export default connect(({ filters, filterParam, products }) => ({
    filters, filterParam, products
}))(Filters);