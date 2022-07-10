import React from 'react';
import './list.css';
import Item from '../item/Item';

const List = (props) => {

    const getRows = (array) => {

        //console.log(array);
        const items = [];
        for (const arr of array) {
    
          for (const element of arr) items.push(element);
    
        }
        const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
        return chunk(items, 4);
    
    }

    const rows = getRows(Object.values(props.data));
    return (
    <>
    { rows.map((row => {
      return <div className = "list_row">{row.map((element) => {

        return <Item data = { element } />

      })} </div> }
    )) }
    </>
  )
}

export default List