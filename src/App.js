import React, {useState} from "react";
import './App.css';

function App() {
  const [todoItem, setTodoItem] = useState('')
  const [data, setData] = useState([])

  function submitData(e) {
    e.preventDefault()
    console.log(todoItem)
    data.push(todoItem)
    console.log(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>test</p>
        <form onSubmit={submitData}>
          <input type="text" onChange={e => {
            setTodoItem(e.target.value)} 
          }></input>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {
            data.map(entry => {
              return <li>{entry}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
