import logo from './logo.svg';
import './App.css';
import { lazy } from 'react';


const LazyComponent = lazy(() => import('./LazyComponent'));
const LazyComponentTwo = lazy(() => import('./LazyComponent2'));

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
      </header>
      <LazyComponent />
      <LazyComponentTwo />
    </div>
  );
}

export default App;
