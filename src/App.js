import logo from './logo.svg';
import './App.css';

function App() {
  const name = "react";
  return (
      <>
          {/* 주석 */}
          <div
              className="react" // 시작 태그를 여러 줄 작성시 주석 작성 가능.
          >
              {name}
          </div>
          // 이런건 
          /* 나온다 */
          <input />
      </>
  )
}



/*
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
    </div>
  );
}
*/
export default App;
