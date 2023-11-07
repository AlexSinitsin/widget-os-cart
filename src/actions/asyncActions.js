import { initFilters, initProducts, initFilteredParam, initFilteredProducts } from './actionCreator'

export const getFilters = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/filters.json")
        .then(Response => Response.json())
        .then(data => {
            dispatch(initFilters(data))
            dispatch(initFilteredParam(data))
        })
    }
}

export const getProducts= () => {
    return (dispatch) => {
        fetch("http://localhost:3000/products.json")
        .then(Response => Response.json())
        .then(data => {
            dispatch(initProducts(data))
            dispatch(initFilteredProducts(data))
        })
    }
}