import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    // state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state; // state 조회시 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
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
      </div>
    );
  }
}

export default Counter;
