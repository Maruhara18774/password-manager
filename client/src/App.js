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
            <input type="text" placeholder="Ex. password123" />
          </li>
          <li>
            <input type="text" placeholder="Ex. facebook.com" />
          </li>
          <li>
            <button>Add password</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
