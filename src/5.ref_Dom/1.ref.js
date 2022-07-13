// ref : HTML에 id를 사용해 DOM에 이름을 다는 것 처럼, 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법.
// 리액트 컴포넌트 안에서도 id를 사용할 수 있다.
// JSX안에서 DOM에 id를 달면 해당 DOM을 렌더링할 떄 그대로 전달. (하지만 특수한 경우 아니면 추천 x)
// 같은 컴포넌트를 여러번 사용시 id는 유일해야되는데 중복 생겨서 잘못된 사용.
// ref는 전역적으로 작동하지 않고, 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않는다.

// ref는 DOM을 꼭 직접적으로 건드려야 할 때 사용.

import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}></button>
      </div>
    );
  }
}

// DOM을 꼭 사용해야 하는 상황.

// - 특정 input에 포커스 주기;
// - 스크롤 박스 조작하기
// - Canvas 요소에 그림 그리기 등.

// ref 사용
// 1. 콜백 함수를 통한 ref 설정.
// ref를 달고자 하는 요소에 ref라는 콜백함수를 props를 전달.
// 이 콜백 함수는 ref값을 파라미터로 전달.
// ex) <input ref={(ref) =>{this.input=ref}} />

// 2. createRef를 통한 ref 설정.
// 리액트에 내장되어 있는 createRef라는 함수를 사용.
// 리액트 v16.3부터 도입

import { Component } from 'react';

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
