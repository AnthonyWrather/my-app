import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my basic React App.
        </p>
        <p>
          This is a test of Firebase hosted app with a Firestore backend.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React?
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
