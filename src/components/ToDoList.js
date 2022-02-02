import React from 'react';
import { useState } from 'react';
import Inputlist from './Inputlist';

function ToDoList(props) {


    const [InputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
  
  
    const itemEvent = (element) => {
      setInputList(element.target.value);
    };
  
    const listOfItems = () => {
      setItems((oldItems) => {
        return [...oldItems, InputList];
      });
      setInputList("");
    }
  
    const removeItem = (id) => {
          setItems((oldItems)=>{
            return oldItems.filter((arrElement, index)=>{
              return index !== id;
            })
          })
    }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            <div className="ListCardWrap">
              <h2 className="text-center">To Do List</h2>
              <div className="input-group mb-3">
                <input type="text" className="form-control" value={InputList} onChange={itemEvent} placeholder="Add Item(s) or Task(s)" aria-label="Recipient's username" aria-describedby="addToList-btn" />
                <button className="btn btn-success" disabled={InputList===""} onClick={listOfItems} type="button" id="addToList-btn"><i className="bi bi-plus"></i></button>
              </div>

              <div className="tasksList">
              <ol className="list-group list-group-numbered">
                  {Items.map((itemValue, index) => {
                   return <Inputlist key={index} id={index} data={itemValue} onSelect={removeItem}/>
                  })}
                  
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ToDoList;
