// 컴포넌트 ref
// 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 떄 씀.

// 사용법.
// MyComponent 내부의 메서드 및 멤버 변수에도 접근.
// 내부의 ref에도 접근할 수 있다. (myCoponent.handleClick, myComponent.input 등...)
<MyComponent
  ref={(ref) => {
    this.myCponent = ref;
  }}
/>;

// ScrollBox 컴포넌트
// JSX의 인라인 스타일링 문법, 스크롤 박스, 최상위DOM에 ref달기.
import { Component } from 'react';
class ScrollBox extends Component {
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;

// 스크롤바를 맨 아래쪽으로 내리는 메서드
// scrollTop    : 세로 스크롤바 위치(0 ~ 350)
// scrollHeight : 스크롤이 있는 박스 안의 div높이 (650)
// clientHeight : 스크롤이 있는 박스의 높이 (300)
scrollToBottom = () => {
  const { scrollHeight, clientHeight } = this.box;
  this.box.scrollTop = scrollHeight - clientHeight;
};

// 정리
// 1. 컴포넌트 내부에서 DOM에 접근해야 할 떄는 ref를 사용.
// 2. ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 고려후 활용.
// 3. 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용하면 잘못된 것.
// 4. 3번을 할 수는 있지만, 리액트 사상에 어긋날 설계. 컴포넌트끼리 데이터 교류시 언제나 데이터를 부모 - 자식
// 흐름으로 교류해야한다. (리덕스, Context API)
