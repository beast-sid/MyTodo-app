import React, { useState } from 'react';
import TodoItem from './MyComponents/TodoItem.js';
const App = () => {
  const [input, setInput] = useState("");
  const [item, setitem] = useState([])//by adding square brackets we are intialising it with empty array
  const itemEvent = (e) => {
    setInput(e.target.value)
  };

  const additem = () => {
    setitem((olditems) => {
      return [...olditems, input];//... operator is used so that all the prev. values should
      // also be included in the array,and new items are added with the help of 
      //input variable
    });
    setInput("");//we are using this because after adding item to list our input area becomes empty again
  };

  const deleteitem = (id) => {
    console.log("deleted",id);
    setitem((allitems) => {
      return allitems.filter((eachitem,indx,allitems) => {    /* filter is used to delete  element */
          return indx!==id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input type='text' placeholder='Add an item' value={input} onChange={itemEvent} />
          <button onClick={additem}>+</button>
          <ul>
            {item.map((printitem, index) => {
              {/*index will store the index of array elements */ }
              return <TodoItem
                key={index}
                id={index}
                text={printitem}
                onSelect={deleteitem}
              />
            })
            }
          </ul>
        </div>
      </div>
      <div>
        <h4>Developed By Siddharth Saxena</h4>
        <a href="https://www.linkedin.com/in/siddharth-saxena-2295281b0/">Connect with me at LinkedIn</a>
      </div>
    </>
  )
}
export default App;