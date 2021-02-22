import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AddingNewPassword">
        <ul>
          <li>
            <h3>Password Manager</h3>
          </li>
          <li>
            <input className='small-input' type="text" placeholder="Ex. password123" />
          </li>
          <li>
            <input className='small-input' type="text" placeholder="Ex. facebook.com" />
          </li>
          <li>
            <div className='small-button'>ADD PASSWORD</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
