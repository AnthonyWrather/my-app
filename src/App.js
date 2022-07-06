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
          This is a test of Firebase hosted app.<br></br>
          Eventually it will have a database backend and Authentication.<br></br>
          Later on looking to implement Remote Config, A/B Testing, App Check and Google Analytics.
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
          <br></br>
           <a
            className="App-link"
            href="https://github.com/AnthonyWrather/my-app/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            The project Wiki Page.
          </a>
          <br></br>
          <a
            className="App-link"
            href="https://github.com/AnthonyWrather/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            The project GitHub repo.
          </a>

        </p>
      </header>
    </div>
  );
}

export default App;
