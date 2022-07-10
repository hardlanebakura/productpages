import React from 'react';
import './item.css';

const Item = (props) => {
  const data = props.data

  const getDVDdiscs = () => {

    (parseInt(data.size) / 1000) < 1 ? data.size += "MB" : data.size = parseInt(data.size) / 1000 + "GB";
    return <div className = "item__size">{ data.size }</div>

  }

  const getBooks = () => {

    return <div className = "item__weight">{ data.weight }KG</div>

  }

  const getChairs = () => {

    return <div className = "item__dimensions">{ data.dimensions }</div>

  }

  const handleClick = (event) => {

    (event.target.classList.contains("checked")) ? event.target.classList.remove("checked") : event.target.classList.add("checked");

  }

  return (
    <div className = "item">
      <button className = "delete-checkbox" onClick = { handleClick } />
      <div className = "item__info">
        <div className = "item__SKU">
          { data.SKU }
        </div>
        <div className = "item__title">
          { data.title }
        </div>
        <div className = "item__price">
          { data.price }
        </div>
          { (data.type === "DVD_discs") ? getDVDdiscs() : (data.type === "books") ? getBooks() : getChairs() }
      </div>
    </div>
  )
}

export default Item