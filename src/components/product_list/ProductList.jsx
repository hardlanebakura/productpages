import React, { useState, useEffect } from 'react';
import './product_list.css';
import axios from 'axios';
import Header from './header/Header';
import List from './list/List';
import Footer from '../Footer';

const ProductList = () => {

  const [data, setData] = useState({});

  useEffect(() => {

    getAllProducts();

  }, []);
  const getAllProducts = () => {

    axios.get("http://localhost/php2/api_items.php")
    .then(response => {

      const allData = response.data;
      //console.log(allData);
      for (const k of Object.keys(allData)) { allData[k] = allData[k].slice(-4); for (const item of allData[k]) item.type = k };
      //console.log(allData);
      setData(allData);

    })
    .catch(error => console.log(error));

  }

  if (Object.keys(data).length !== 0) {
  return (
    <>
    <Header getAllProducts = { getAllProducts } />
    <List data = { data } />
    <Footer />
    </>
  )
  }
}

export default ProductList