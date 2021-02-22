import './App.css';
import {useState} from 'react';
import Axios from 'axios';
function App() {
  // Create states to save value
  const [password,setPassword] = useState("");
  const [title,setTitle] = useState("");

const addPassword = ()=>{
  Axios.post('http://localhost:8080/addPassword',{
    password:password,
    title: title,
  });

}

  return (
    <div className="App">
      <div className="AddingNewPassword">
        <ul>
          <li>
            <h3>Password Manager</h3>
          </li>
          <li>
            <input className='small-input' 
            type="text" 
            placeholder="Ex. password123" 
            onChange={(event)=>{
              setPassword(event.target.value)
            }}
            />
          </li>
          <li>
            <input 
            className='small-input' 
            type="text" 
            placeholder="Ex. facebook.com" 
            onChange={(event)=>{
              setTitle(event.target.value)
            }}
            />
          </li>
          <li>
            <div 
            className='small-button'
            onClick={addPassword}
            >ADD PASSWORD</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
