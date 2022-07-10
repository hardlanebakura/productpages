import React from 'react';
import './product.css';

const Type = (props) => {
    
  return (
    <div id = "product-description">
        { (props.type === "DVD discs") ? 
        <><label htmlFor = 'DVD_discs'>Size (MB) </label><input type = 'text' id = 'size' name = 'DVD' onChange = { props.handleChange } /></>
        : (props.type === "Books") ? 
        <><label htmlFor = 'books'>Weight (KG) </label><input type = 'text' id = 'Book' name = 'book' onChange = { props.handleChange } /></>
        : <><div id = 'Furniture'>
            <label htmlFor = 'height'>Height (CM) </label>
            <input type = 'text' id = 'height' name = 'height' onChange= { props.handleChange } /><br />
            <label htmlFor = 'width'>Width (CM) </label>
            <input type = 'text' id = 'width' name = 'width' onChange= { props.handleChange } /><br />
            <label htmlFor = 'length'>Length (CM) </label>
            <input type = 'text' id = 'length' name = 'length' onChange= { props.handleChange } /><br />
        </div></>
        } 
    </div>
  )
}

export default Type