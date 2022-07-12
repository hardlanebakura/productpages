import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header/Header';
import Footer from '../Footer';
import Type from './Type';
import './product.css';

const Product = () => {

  // eslint-disable-next-line
  const [data, setData] = useState({});
  const [ids, setIDs] = useState([]);
  const [formIsFilled, setFormIsFilled] = useState(false);

  useEffect(() => {

    getAllProducts();
    handleFooter(509);

  }, []);
  const getAllProducts = () => {

    axios.get("http://localhost/s/react1/api/api_items.php")
    .then(response => {

      const allData = response.data;
      //console.log(allData);
      const allIDs = [];
      for (const k of Object.keys(allData)) { allData[k] = allData[k].slice(-4); for (const item of allData[k]) {item.type = k; allIDs.push(item.SKU) } };
      //console.log(allData);
      setData(allData);
      setIDs(allIDs);
      console.log("All IDs:");
      console.log(allIDs);

    })

  }

  const changeValue = (event) => {

    (event.target.value === "0") ? setActive(false) : setActive(true);
    setType(event.target.value);
    (event.target.value === "DVD discs") ? handleFooter(488) : (event.target.value === "Chairs") ? handleFooter(446) : (event.target.value === "0") ? handleFooter(509) : handleFooter(488);

  }

  const [type, setType] = useState("");
  const [selectActive, setActive] = useState(false);

  const handleNum = (element) => {

    var onlyNumbersRegex = /^-?\d+\.?\d*$/;
    const productType = document.getElementsByClassName("productType")[0];
    const productValue = productType.options[productType.selectedIndex].value;
    if (productValue !== "Chairs") {
    if (!element.value.match(onlyNumbersRegex) && (element.value !== "")) { if (!element.parentNode.getElementsByClassName("error").length > 0) element.insertAdjacentHTML("afterend", `<div class = 'error'>This field allows only numbers.</div>`) }
    else { const error = element.parentNode.getElementsByClassName("error")[0]; if (error) error.remove(); };
    }
    else {
      if (!(element.value.match(onlyNumbersRegex) && (element.value !== ""))) { if (element.nextElementSibling !== null) { if (!(element.nextElementSibling.classList.contains("error"))) element.insertAdjacentHTML("afterend", `<div class = 'error'>This field allows only numbers.</div>`) } }
      else { if (element.nextElementSibling !== null && element.nextElementSibling.classList.contains("error")) element.nextElementSibling.remove(); }
    }

  }

  const handleFooter = (element) => {

    document.getElementById("footer").style.marginTop = `${element}px`;

  }

  const handleID = (element) => {

    if (ids.includes(element.value)) { if (!element.parentNode.getElementsByClassName("error").length > 0) element.insertAdjacentHTML("afterend", `<div class = 'error'>ID is not unique.</div>`) }
    else { const error = element.parentNode.getElementsByClassName("error")[0]; if (error) error.remove(); };

  }

  const handleChange = (event) => {

    const numericalFields = ["height", "length", "width", "price", "size"];
    (numericalFields.includes(event.target.id)) ? handleNum(event.target) : handleID(event.target);
    const inputFields = document.getElementsByTagName("input");
    var inputFieldsAreAllFilled = true;
    for (const inputField of inputFields) { if (inputField.value === "") inputFieldsAreAllFilled = false; }
    var selectIsNotEmpty = document.getElementsByTagName("select")[0].value !== "0";
    (document.getElementsByClassName("error").length === 0 && inputFieldsAreAllFilled && selectIsNotEmpty) ? setFormIsFilled(true) : setFormIsFilled(false);

  };

  return (
    <>
    <Header formIsFilled = { formIsFilled } />
    <div id = "product">
      <form id = "product-form" method = "POST">
        <div className = "product-field">
          <label htmlFor = "sku">SKU</label>
          <input type = "text" id = "sku" name = "sku" placeholder = "#sku" onChange={handleChange} />
        </div>
        <div className = "product-field">
          <label htmlFor = "name">Name</label>
          <input type = "text" id = "name" name = "name" placeholder = "#name" />
        </div>
        <div className = "product-field">
          <label htmlFor = "price">Price ($)</label>
          <input type = "text" id = "price" name = "price" placeholder = "#price" onChange={handleChange} />
        </div>
        <div id = "type-switcher">
          <label htmlFor = "type-switcher">Type Switcher</label>
          <select className = "productType" onChange = { changeValue } >
            <option value = "0">Select Type</option>
            <option value = "DVD discs">DVD discs</option>
            <option value = "Books">Books</option>
            <option value = "Chairs">Chairs</option>
          </select>
        </div>
        { selectActive && <Type type = { type } handleChange = { handleChange } /> }
      </form>
    </div>
    <Footer />
    </>
  )
}

export default Product