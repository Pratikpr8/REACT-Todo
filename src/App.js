import React,{useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './Components/TodoList'

export default function App() {

  const[input, setInput] = useState("")
  // const[itemList, setItemList] = useState(JSON.parse(localStorage.getItem("Todo_List")) || [])
  const[itemList, setItemList] = useState([])


  useEffect(()=>{
    const todoFiles = JSON.parse(localStorage.getItem("Todo_List"))
    if( todoFiles?.length > 0) {
      setItemList(todoFiles)
    }
  },[])


useEffect(()=>{
    localStorage.setItem('Todo_List',JSON.stringify(itemList))
  },[itemList])


  const onHandleSubmit = (event) => {
    event.preventDefault();
    setInput("");
  }


  const onHandleChange = (event) => {
      setInput(event.target.value);
  }


  const onHandleClick = () => {
    setItemList([...itemList, 
      {name:input, 
        key:uuidv4(),
        completed:false
      }])
  }

  return (
    <div className='todo--container'>
      <div className='todo--header'>
        <h1 className='todo--title'>Todo </h1>
      </div>

      <div>
        <form className='todo--form' onSubmit={onHandleSubmit}>
        <input 
          className='todo--form_input'
          onChange={onHandleChange} 
          type="text" 
          placeholder='Enter a Todo' 
          value={input}
        />
          <button onClick={onHandleClick}>Add Todo</button>
        </form>
      </div>

      <div>
        <TodoList 
          itemList={itemList}
          setItemList={setItemList}
        />

      </div>
    </div>
  )
}
