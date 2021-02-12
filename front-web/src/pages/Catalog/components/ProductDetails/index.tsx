import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {ReactComponent as ArrowIcon} from '../../../../core/assets/images/arrow.svg';
import {ReactComponent as ProductImage} from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss';


type ParamsType = {
  productId: string;
}

const ProductDetails = () =>{

  const {productId} = useParams<ParamsType>();

  console.log(productId);
  

  return(
    <div className="product-details-container">
      <div className="card-base border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback"/>
          <h1 className="text-goback">VOLTAR</h1>
        </Link>
        <div className="row">
          <div className="col-6 pr-5">
            <div className="product-details-card text-center">
              <ProductImage className="product-details-image"/>
            </div>
            <h1 className="product-details-name">
              Computador Desktop - Intel Core i7
            </h1>
            <ProductPrice price="3.779,00"/>
          </div>
          <div className="col-6 product-details-card">
            <h1 className="product-description-title">
              Descrição do produto
            </h1>
            <p className="product-description-text">
              Seja um mestre em multitarefas com a capacidade 
              para exibir quatro aplicativos simultâneos na tela. 
              A tela está ficando abarrotada? Crie áreas de trabalho 
              virtuais para obter mais espaço e trabalhar com os itens
              que você deseja. Além disso, todas as notificações e principais 
              configurações são reunidas em uma única tela de fácil acesso.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProductDetails;