import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getFilters, getProducts } from './actions/asyncActions';
import Filters from './containers/filters';
import Title from './components/title/title';
import Products from './containers/products';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <Title />
        <Filters />
      </div>
      <Products />
    </div>
  );
}

export default App;
