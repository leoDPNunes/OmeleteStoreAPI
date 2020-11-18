import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Title, ProductInfo } from './styles';

import { IProduct } from './product';

interface ProductParams {
  product: string;
}

const Product =(props:any) => {
  const [oneProduct, setOneProduct] = useState<IProduct | null>(null);
  const { params } = useRouteMatch<ProductParams>();

   useEffect(() => {
    setOneProduct(props.location.state);
  }, [params.product]);

  return (
    <>
    <Title>Find the best products of Omelete Store</Title>

    { oneProduct && (
      <ProductInfo>
        <Carousel>
           {
             oneProduct.images.url.map((item) => (
             <div>
               <img src={item} />
             </div>
             ))
           }
        </Carousel>
        <div>
            <strong>{oneProduct.name}</strong>
            <p>Preço: {oneProduct.defaultPrice}</p>
            <p>Tamanhos: {oneProduct.images.type.join(', ')}</p>
        </div>
      </ProductInfo>
    )}

    </>
  );
}

export default Product;
