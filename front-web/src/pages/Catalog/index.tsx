import React from 'react';
import {Link} from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () =>(
  <div className="catalog-container">
    <h1 className="catalog-title">
      Catálogo de produtos
    </h1>
    <div className="catalog-products">
     
     <Link to="/products/0"> <ProductCard/></Link>

     <Link to="/products/1"> <ProductCard/></Link>
     <Link to="/products/2"> <ProductCard/></Link>
     <Link to="/products/3"> <ProductCard/></Link>
     <Link to="/products/4"> <ProductCard/></Link>
    
    </div>
  </div>
);

export default Catalog;