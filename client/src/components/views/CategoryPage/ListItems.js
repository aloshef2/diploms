import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="input-group" key={item.value}>
         <input type="text" className="form-control" id={item.value} value={item.label} />
         <input type="text" className="form-control" id={item.value} value={item.value}  />

        <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" onClick={() => {
            props.deleteItem(item.value)
        }} > </button>
        </div>
        
     
    </div>})
    return <div>
        {listItems}
    
    </div>;
  }

  export default ListItems;