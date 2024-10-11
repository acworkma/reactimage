import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';

//const connectionString = process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING;
//const containerClient = process.env.REACT_APP_AZURE_STORAGE_CONTAINER; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
