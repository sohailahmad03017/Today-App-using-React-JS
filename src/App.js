import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//Importing customize js files
import Button from './Components/Button';

function App() {

  let [list, setList] = useState([]);
  let [text, setText] = useState("");


  let valChange = (input) => {
    setText(input.target.value);
  }

  let add = () => {
    if (!text) {
      alert("Please, Enter some text");
    }
    else {
      list.push(text);

      setList([...list])
      setText('');
    }
  }

  let editItem = (index) => {
    list[index] = prompt("Enter new Value", list[index]);
    setList([...list]);
  }

  let delItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  }

  let delAll = () => setList([])


  return (
    <div className="App">
      <header className="App-header">

        <div>
          <input value={text} type="text" onChange={valChange} class="input" />
          <Button func={add} btnVal="Add Item" nClass="btn addBtn" />
        </div>


        <div className="parent">

          {
            list.map((value, index) => {
              return (
                <div class="item">

                  <span id={index} >{value}</span>

                  <span>
                    <Button func={() => editItem(index)} btnVal="Edit" nClass="btn editBtn" />
                    <Button func={() => delItem(index)} btnVal="Delete" nClass="btn delBtn" />
                  </span>

                </div>
              )
            })
          }

          <Button func={delAll} btnVal="Delete All" nClass="btn delBtn" />

        </div>

      </header>
    </div>
  );
}

export default App;
