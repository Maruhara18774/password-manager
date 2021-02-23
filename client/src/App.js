import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  // Create states to save value
  const [password,setPassword] = useState("");
  const [title,setTitle] = useState("");
  const [passwordList,setPasswordList] = useState([]);
useEffect(()=>{
  Axios.get('http://localhost:8080/showPasswords')
  .then((response)=>{
    setPasswordList(response.data)
  });
},[])
const addPassword = ()=>{
  Axios.post('http://localhost:8080/addPassword',{
    password:password,
    title: title,
  });

};

const decryptPassword = (encryption) =>{
  Axios.post('http://localhost:8080/decryptPassword',
  {password: encryption.password, 
  iv: encryption.iv}
  ).then(response =>{
    console.log(response.data);
  })
};

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
      <div className="Passwords">
            {passwordList.map((val,key)=>{
              return(
                <div className="Passwords-element" onClick={()=>decryptPassword({password:val.password,iv: val.iv})} key={key}>
                  <h4>{val.title}</h4>
                  </div>
              )
            })}
      </div>
    </div>
  );
}

export default App;
