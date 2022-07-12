import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './header.css';

const Header = (props) => {

  const save = (event) => {

    event.preventDefault();
    const form = new FormData(document.getElementById("product-form"));
    const formData = Object.fromEntries(form.entries());
    if (props.formIsFilled) {
    //console.log(formData);
      axios({
        method: "post",
        url: "http://localhost/php2/add_to_db.php",
        headers: { "content-type": "application/json" },
        data: formData
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));

      axios.get("http://localhost/php2/api_items.php")
      .then(response => response.data)
      .then(response => console.log(response))
      .catch(error => console.log(error));

  }

  else {

    const inputFields = document.getElementsByTagName("input");
    var inputFieldsAreAllFilled = true;
    var productDescription = document.getElementById("product-description");
    for (const inputField of inputFields) { if (inputField.value === "") inputFieldsAreAllFilled = false; }
    if ((!inputFieldsAreAllFilled) && document.getElementsByClassName("input_fill_error").length === 0) productDescription.insertAdjacentHTML("beforeend", `<div class = "input_fill_error">Please fill all fields.</div>`);

  }

}

  return (
    <div id = "header">
        <div id = "header__title">
            Product List
        </div>
        <div id = "header__buttons">
            <button id = "save-product-btn" onClick = { save } >
            { (props.formIsFilled) ? <Link to = "/">SAVE1</Link> : "SAVE1" }
            </button>
            <button id = "delete-product-btn">
                <Link to = "/">CANCEL</Link>
            </button>
        </div>
    </div>
  )
}

export default Header