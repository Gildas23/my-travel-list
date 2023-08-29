import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackagingList from "./Components/PackagingList";
import Stats from "./Components/Stats";

function App() {
  const [items,setItems] = useState([])

  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }

  function handleDeleteItem(itemToDelete){
    setItems((items)=>items.filter(item=>item.id !== itemToDelete.id)
    )
  }

  function handleItemPacked(packedItem){

     setItems(items=>items.map((item)=> packedItem.id === item.id? {...item,packed:!item.packed} :   item ))
  }

  function handleClearList(){
    const confirmed = window.confirm("Are you sure you'll like to delete your packing item list?")
    if(confirmed){
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackagingList items={items} onItemDelete={handleDeleteItem} onItemPacked={handleItemPacked} onListCleared={handleClearList}/>
      <Stats items={items} />
    </div>
  );
}

export default App;
