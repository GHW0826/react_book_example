// 감싸인 문법
// <div></div>로 감싸주지 않으면 오류 발생.
/*
    virtual Dom에서 컴포넌트 변화를 감지해 낼때 효율적으로 비교하게 
    컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 한다는 규칙이 있음.
*/

function App() {
  return (
    <div>
      {" "}
      //
      <h1>1</h1>
      <h2>1</h2>
    </div> //
  );
}

// react 모듈에 Fragment라는 컴포넌트를 추가로 불러옴
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      {" "}
      //
      <h1>1</h1>
      <h2>1</h2>
    </Fragment> //
  );
}
//// ==  위 아래가 같음
function App() {
  return (
    <>
      <h1>1</h1>
      <h2>1</h2>
    </>
  );
}

// 자바 스크립트 표현
// JSX에서 자바스크립트 표현식 가능. JSX 내부에서 {}로 감싸면 된다.
function App() {
  const name = "react";
  return (
    <>
      <h1>{name} test</h1>
      <h1>good</h1>
    </>
  );
}

// if 대신 조건 연산자
// JSX내부에선 if문 사용 불가능.
// JSX밖에서 if문 사용하거나,  { } 안에 삼항 연산자 사용.
function App() {
  const name = "react";
  return <div>{name === "react" ? <h1>react</h1> : <h1>non react</h1>}</div>;
}

// and 연산자(&&)를 사용한 조건부 렌더링
function App() {
  const name = "react";
  return <div>{name === "react" ? <h1>1</h1> : null}</div>;
}
// -> && 으로 코드 줄임
// &&으로 줄일 수 있는 이유는 리액트는 false를 렌더링할 떄는 null과 마찬가지로 아무것도 나타내지 않기 때문.
function App() {
  const name = "react";
  return <div>{name === "react" && <h1>1</h1>}</div>;
}
// 0은 숫자라서 화면에 나타남.
// 괄호는 감싸도 되고 안해도 됨. 주로 여러 줄 작성시 괄호로 감싼다. {}
const number = 0;
return number && <div>2</div>;

// undefined를 렌더링하지 않기.
// 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안된다.
// 아래 코드는 오류 발생.
function App() {
  const name = undefined;
  return name;
}

// 어떤 값이 undefined일 수도 있다면 or(||)를 사용해 해당값이 undefined일때
// 사용할 값을 지정할 수 있어 오류 방지 가능.
function App() {
  const name = undefined;
  return name || "value is undefined";
}
// ->
function App() {
  const name = undefined;
  return <div>{name || "react"}</div>;
}

export default App;
