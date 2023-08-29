import React from 'react'

function Item({ item, onItemDelete,onItemPacked}) {
    return (
      <li>
        <input type="checkbox" value={item.packed} onClick={()=>onItemPacked(item)}/>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={()=>onItemDelete(item)}>❌</button>
      </li>
    );
  }
export default Item