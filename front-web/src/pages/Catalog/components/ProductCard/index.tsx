import React from 'react';
import {ReactComponent as ProductImage} from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss';

const ProductCard = () =>(
  <div className="card-base border-radius-10 product-card">
    <ProductImage/>
    <div className="product-info">
      <h6 className="product-name">
        Computador Desktop - Intel Core i7
      </h6>
    </div>
   <ProductPrice price="2.779,00"/>
  </div>
);

export default ProductCard;