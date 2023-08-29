import React from 'react'

function Stats({items}) {
    if(!items.length) {
      return <footer className="stats">
      <em>Start packing now !</em>
    </footer>}
  
    const numItems = items.length;
    const packed = (items.filter(item=>item.packed)).length
    const percentage = packed && numItems ? (packed/numItems)*100 : 0
  
    return (
      <footer className="stats">
        <em> You have {numItems} items on your list and you gotten {packed} of it ready , you are {percentage}% done</em>{" "}
      </footer>
    );
  }

export default Stats