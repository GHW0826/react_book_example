// props : 컴포넌트 속성을 설정할때 사용하는 요소.
// props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 가능.

// JSX 내부 props 렌더링
// name이라는 props를 렌더링 하도록 설정. 파라미터로 받아와서 사용.
// app에서 name지워도 실행은 된다. 해당칸 빈칸.
function App() {
  return <MyConponent name="react" />;
}

const MyComponent = (props) => {
  return <div>이름: {props.name}</div>;
};

// default props
MyComponent.defaultProps = {
  name: 'default',
};

// 컴포넌트 태그 사이의 내용을 children props를 사용해서 보여줄 수 있다.
function App() {
  return <MyConponent>ttt</MyConponent>;
}

const MyComponent = (props) => {
  return (
    <div>
      이름: {props.name}
      <br />
      child {props.children}
    </div>
  );
};

// 비구조화 할당 문법을 통해 props 내부 값 추출
const MyComponent = ({ name, children }) => {
  return (
    <div>
      name : {name}
      children : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'defaultName',
};

// propTypes 통한 props 검증
// 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 떄는 propTypes를 사용.
// defaultProp을 설정하는 것과 비슷
// 타입 이상하면 콘솔에서 오류나옴
import PropTypes from 'prop-types';
import { Component } from 'react';

MyComponent.defaultProps = {
  name: 'defaultName',
};

MyComponent.protoTypes = {
  name: PropTypes.string,
};

// propTypes를 지정하지 않았을떄 경고 메세지를 띄워 주는 작업.
// propTypes를 지정할 떄 뒤에 isRequired를 붙여주면 됨,
MyComponent.protoTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

// 자세한건 아래 확인
// https://github.com/facebook/prop-types

// 클래스형 컴포넌트에서 props 사용하기
class MyComponent1 extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        name : {name}
        children : {children}
        number: {favoriteNumber}
      </div>
    );
  }
}

MyComponent1.defaultProps = {
  name='default'
};

MyComponent1.PropTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

// 클래스형 컴포넌트는 class 내부에서 지정 가능.
class MyComponent2 extends Component {
  static defaultProps = {
    name:"default"
  };
  static PropTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        name : {name}
        children : {children}
        number: {favoriteNumber}
      </div>
    );
  }
}