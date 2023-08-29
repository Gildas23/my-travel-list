import {useState} from 'react'

function Form({onAddItems}) {

    const [description,setDescription] = useState("")
    const [select,setSelect] = useState(1)
  
  
    function handleSubmit(event){
      event.preventDefault()
      console.log(event)
  
      if(!description) return;
  
      const newItem = {
        description,select,packed:false,id:Date.now()
      }
  
      onAddItems(newItem)
      setDescription('')
      setSelect(1)
    }
    
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip</h3>
        <select onChange={e=>setSelect(e.target.value)} value={select}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
        <input placeholder="add new item ..." value={description} onChange={e=>setDescription(e.target.value)}></input>
        <button>ADD</button>
      </form>
    );
  }

export default Form