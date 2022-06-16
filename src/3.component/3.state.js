// state는 컴포넌트 내부에서 바뀔 수 있는 값.
// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값.
// 컴포넌트 자신은 읽기만 가능. prop을 바꾸려면 부모 컴포넌트에서 바꿔야 된다.

// state 종류는 2가지.
// 1. 클래스형 컴포넌트의 state
// 2. 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state
import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    // state의 초깃값 설정
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state 조회시 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭시 호출할 함수를 지정.
          onClick={() => {
            // this.state를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

// state 객체 안에 여러 값이 있을때.
// state의 초깃값 설정
this.state = {
  number: 0,
  fixedNumber: 1,
};

// 클래스 컴포넌트 state 초깃값 설정2

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
  }
}

// this.setState에 객체 대신 함수 인자 전달.
// setState2번 호출해도 1씩 더해짐.
// 해결책은 this.setState를 사용할 떄 객체 대신 함수를 인자로 넣어주는 것.
onClick={() => {
    this.setState({ number: number + 1});
    this.setState({number: this.state.number + 1 });
}};

// ->
// prevState는 기존 상태
// props는 현재 지니고 있는 props
this.setState((prevState, props) => {
    return {
        // 업데이트 하고 싶은 내용
    }
});

<button
          // onClick을 통해 버튼이 클릭시 호출할 함수를 지정.
          onClick={() => {
            // 함수를 넣음
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            // 객체를 반환
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
</button>

// this.setState가 끝난 후 특정 작업 실행
<button
          // onClick을 통해 버튼이 클릭시 호출할 함수를 지정.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('call setState');
              }
            );
          }}
        >
          +1
</button>

// 함수 컴포넌트에서 useState 사용하기
// 리액트 16.8 이전 버전에서는 함수 컴포넌트에서 state사용 불가능.
// 이후엔 가능 hooks사용. (여기선useState만 배움)

// 배열 비구조화 할당.
// 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해줌.
const array = [1, 2];
const one = array[0];
const two = array[1];

const array1 = [1, 2];
const [one1, two1] = array;


// useState 사용하기
// text, setText로 바꿔도 상관없다.
import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hello');
  const onClickLeave = () => setMessage('bye');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;

// 여러개 useState 사용
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('hello');
    const onClickLeave = () => setMessage('bye');
  
    const [color, setColor] = useState('black');
    const onClickRed = () => setColor('red');
    return (
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={{ color }}>{message}</h1>
        <button style={{ color: 'red' }} onClick={onClickRed}>
          red
        </button>
        <button style={{ color: 'green' }} onClick={() => setColor('green')}>
          green
        </button>
        <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
          blue
        </button>
      </div>
    );
  };

  // state 사용시 주의 사항
  // 클래스, 함수 컴포넌트 둘다 state값을 바꿀때에는,
  //  setState or useState를 통해 전달받은 세터 함수를 사용해야한다.
  // 객체, 배열 업데이트하려면 배열, 객체 사본을 만들고 그 사본에 값을 업데이트 후
  // 세터함수를 통해 업데이트.
  const obj = {a:1, b:2, c:3};
  const nextObj = {...obj, b: 4};
  // ...
  // 객체 사본 만들떄 spread연산자라 불리는 ...을 사용하여 처리, 
  // 배열에 대한 사본을 만들때는 배열 내장 함수 활용.

// 정리
// props, state
// 둘다 컴포넌트에서 사용하거나 렌더링할 데이터 담음
// props는 부모 컴포넌트에서 설정, state는 컴포넌트 자체에서 지닌 값, 내부에서 업데이트 가능.
// props를 사용 한다고 해서 무조건 고정은 아님.
// 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고,
// 자식 컴포넌트에서 특정 이벤트가 발생할 떄 부모 컴포넌트의 메서드 호출시 props도 유동적 사용 가능