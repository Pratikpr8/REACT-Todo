import React, { useState } from "react";

export default function TodoList({ itemList, setItemList }) {


  const [editItemId, setEditItemId] = useState(null);
  const [InputOnEdit, setInputOnEdit] = useState("");


  const onHandleDelete = (key) => {
    const updatedList= [...itemList].filter((item) => item.key != key);
    setItemList(updatedList)
  };


  const onHandleComplete = (key) => {

    const updatedList = [...itemList]
      updatedList.map((item) => {
        if (item.key === key) {
          item.completed = !item.completed;
        }
        return item;
      })
      setItemList(updatedList)
    };


  const onEditChange = (event) => {
    setInputOnEdit(event.target.value);
  };

  const onHandleUpdate = (key) => {
    const updatedList = [...itemList].map((item) => {
        if (item.key === key) {
          item.name = InputOnEdit;
        }
        return item;
      })
      setItemList(updatedList)
    
    setEditItemId(null);
    setInputOnEdit("");
  };



 

// console.log(itemList)
  return (
    <div>
      {itemList.map((item) => {
      
        return (
          <div className="todo--list" key={item.key}>

            <input
              type="checkbox"
              value={item.completed}
              onChange={() => onHandleComplete(item.key)}
              checked={item.completed}
              className='todo--checkbox'
            />

            {editItemId === item.key ? (
              <input autoFocus type="text" onChange={onEditChange} value={InputOnEdit} className='todo--form_input_edit' />
            ) : (
              <p  className={item.completed ? "todo--text completed": "todo--text "}>{item.name}</p>
            )}

            <button className='button button-round' onClick={() => onHandleDelete(item.key)}>X</button>

           
            {editItemId === item.key ? (
              <button className='button button-round' onClick={() => onHandleUpdate(item.key)}>✓</button>
              ) : (
                <button className='button button-round' onClick={() => setEditItemId(item.key)}>✎</button>
              )}
          </div>
        );
      })}
    </div>
  );
}
