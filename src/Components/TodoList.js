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
          <div key={item.key}>
            {editItemId === item.key ? (
              <input type="text" onChange={onEditChange} value={InputOnEdit} />
            ) : (
              <p>{item.name}</p>
            )}
            <button onClick={() => onHandleDelete(item.key)}>X</button>

            <input
              type="checkbox"
              value={item.completed}
              onChange={() => onHandleComplete(item.key)}
              checked={item.completed}
            />
            {editItemId === item.key ? (
              <button onClick={() => onHandleUpdate(item.key)}>Update</button>
              ) : (
                <button onClick={() => setEditItemId(item.key)}>✎</button>
              )}
          </div>
        );
      })}
    </div>
  );
}
