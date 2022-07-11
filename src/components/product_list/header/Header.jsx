import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './header.css';

const Header = (props) => {

  const massDelete = (event) => {

    var checkedItems = document.getElementsByClassName("checked");
    checkedItems = Array.from(checkedItems).map((item) => item.parentNode.getElementsByTagName("div"));
    
    if (checkedItems.length > 0) {

      var data = [];
      for (const checkedItem of checkedItems) {

        var d = {};

        for (const div of checkedItem) d[div.classList[0].split("item__")[1]] = div.innerText;
        data.push(d);

      }

      axios({
        method: "post",
        url: "http://localhost/php2/mass_delete.php",
        headers: { "content-type": "application/json" },
        data: data
      })
      .then(result => {
        console.log(result);
        props.getAllProducts();
        for (const item of document.getElementsByClassName("delete-checkbox")) if (item.classList.contains("checked")) item.classList.remove("checked");
    })
      .catch(error => console.log(error));

    }

  }

  return (
    <div id = "header">
        <div id = "header__title">
            Product List
        </div>
        <div id = "header__buttons">
            <button id = "add-product-btn">
                <Link to = "/add-product">ADD</Link>
            </button>
            <button id = "delete-product-btn" onClick = { massDelete } >
                MASS DELETE
            </button>
        </div>
    </div>
  )
}

export default Header