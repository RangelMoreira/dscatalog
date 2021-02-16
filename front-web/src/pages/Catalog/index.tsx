import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductResponse } from '../../core/types/Product';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => {

  const [productResponse, setProductResponse] = useState<ProductResponse>();

  console.log(productResponse);

  useEffect(()=>{
    const params ={
      page:0,
      linesPerPage:12
    }
    makeRequest({url:'/products',params})
      .then(response => setProductResponse(response.data));
  },[]);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">
        Catálogo de produtos
    </h1>
      <div className="catalog-products">

        {productResponse?.content.map(product =>(
          <Link to={`/products/${product.id}`} key={product.id}> <ProductCard product={product}/></Link>
        ))}

      </div>
    </div>
  )
}

export default Catalog;