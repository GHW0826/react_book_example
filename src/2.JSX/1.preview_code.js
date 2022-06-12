// app.js
// import 특정 파일 불러오기. 다른파일들을 불러와 사용 가능.
// 원래 브라우저에는 없음. nodejs에서 지원하는 기능.
// 브라우저에서도 사용하기 위해 번들러 사용(bundler). (e.g webpack)
// 번들러 사용시 import(require)로 모듈 로드시 불러온 모듈을 모두 합쳐서 하나의 파일 생성.
// or 최적화 과정에서 여러 개 파일로 분리.
// babel : JSX, 최신 버전 문법을 ES5로 변환 (구 버전 브라우저와 호환하기 위해)
// webpack 로더 설치 설정은 직접해야 하지만 create-react-app이 대신함. 
import logo from './logo.svg';
import './App.css';

// app이라는 컴포넌트 만듬. (함수 컴포넌트). 아래 형식이 JSX
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

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
// import App from './App';

/*
  ReactDom.render : 컴포넌트를 페이지에 렌더링하는 역할.
  react-dom 모듈을 불러와 사용 가능.
  이 함수의 첫 파라미터에는 페이지에 렌더링할 내용을 JSX로 작성.
            두번쨰 파라미터에는 해당 JSX를 렌더링할 doc 내부요소를 설정. 
            (아래 예제 root는 public/index.html에 있음)
*/

/*
  React.StrictMode : 리액트 프로젝트에서 레거시 기능들을 사용하지 못하게 하는 기능.
  훗날 deprecated될 기능들을 사용했을때 경고를 출력한다.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default App;
