import {useState} from 'react'
import Item from './Item'

function PackagingList({items,onItemDelete,onItemPacked,onListCleared}) {
    const [sortBy,setSortBy] = useState('input')
  
    let sortedItems;
    if(sortBy === 'input') sortedItems = items 
  
    if(sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))
  
    if(sortBy === 'packed') sortedItems = items.slice().sort((a,b)=>  Number(b.packed) - Number(a.packed) )
  
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => {
            return <Item item={item} key={item.id} onItemDelete={onItemDelete} onItemPacked={onItemPacked}/>;
          })}
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>          
            <option value='description'>Sort by description</option>
            <option value='packed'>sort by the packed status</option>
          </select>
          <button className="" onClick={onListCleared}>Clear list</button>
        </div>
      </div>
    );
  }

export default PackagingList