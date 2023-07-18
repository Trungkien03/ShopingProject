import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //product.state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/api/products/');
      const fetchedData = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...fetchedData]);
    };

    fetchProducts();
  }, []);

  

  return <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>;
};

export default ProductProvider;
