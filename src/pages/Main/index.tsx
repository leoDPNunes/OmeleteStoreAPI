import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Title, Form, Produto, Error } from './styles';

import { IProduct, Image } from '../Product/product';


const Main: React.FC = () => {
  const [newProduct, setNewProduct] = useState('');
  const [inputError, setInputError] = useState('');

  const [products, setProducts] = useState<IProduct[]>(() => {
    const storagedProducts = localStorage.getItem('@OmeleteStore:products');

    if (storagedProducts) {
      return JSON.parse(storagedProducts);
    }
    return [];
  });

  useEffect(() => {
    //localStorage.setItem('@OmeleteStore:products', JSON.stringify(products));
  }, [products]);

  async function handleAddProduct(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newProduct) {
      setInputError('Type the name of the product');
      return;
    }

    try {
      const response = await api.get<any>(`autocomplete/${newProduct}`);

      let arrayResponse: [] = response.data.items;

      if (arrayResponse.length <= 0) {
        throw Error;
      }

      var productList: IProduct[] = [];

      arrayResponse.forEach((item: any, i) => {
        let imagens: Image = {
          id: response.data?.items[i]?.map["images.id"],
          position: response.data?.items[i]?.map["images.position"],
          type: response.data?.items[i]?.map["images.type"],
          url: response.data?.items[i]?.map["images.url"],
        };

        let newUrl: string[] = [];

        imagens.url.forEach(item => {
          newUrl = newUrl.concat("http://static-store.worldticket.com.br/" + item);
        });
        imagens.url = newUrl;

        productList = productList.concat({
          id: item.map.id,
          defaultPrice: item.map.defaultPrice,
          name: item.map.name,
          uri: item.map.uri,
          images: imagens
        });
      });

      setProducts(productList);
      setNewProduct('');
      setInputError('');

    } catch (err) {
      setInputError('product not found');
    }
  }

  return (
    <>
      <Title>Find the best products of Omelete Store</Title>
      <Form hasError={!!inputError} onSubmit={handleAddProduct}>
        <input
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="type here the name of the product"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Produto>
        {
          products.map((item) => (
            <Link key={item.id} to={
              {
                pathname: `/products${item.uri}`,
                state:item
              }
            } >
              <img src={item.images.url[0]} alt={item.name}/>
              <p>{item.name}</p>
              <div>
                <p>{item.defaultPrice}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))
        }
      </Produto>
    </>
  );
};

export default Main;
