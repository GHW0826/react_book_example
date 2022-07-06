// 사용자가 웹 브라우저에서 DOM 요소들과 상호작용하는 것을 이벤트라고한다.
// ex) 마우스 커서 오버, 클릭, form요소 값 바뀜 등..

/*
    이벤트 사용시 주의 사항
    1. 이벤트 이름은 카멜 표기법으로 작성
        onClick
    2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
        코드를 넣는게 아니라 함수형태의 객체를 전달.

    3. DOM 요소에만 이벤트를 설정할 수 있다.
        div, button, input, form.. 등 DOM요소에는 이벤트 설정 가능. 직접만든 컴포넌트에는 이벤트를 자체적으로 설정X
        
        ex) onClick 값 설정시 props를 전달하는 것 일 뿐임.

        <Mycomponent onClick = {doSomething}/>
        따라서 자체적으로 이벤트 설정 x. 전달받은 props를 컴포넌트 내부의 DOM이벤트로 설정은 가능,
        
        <div onClick={this.props.onClick}>
            { // (...) // }
        </div>
*/

// 이벤트 종류
/*
    - Clipboard     - Touch
    - Composition   - UI
    - keyboard      - Wheel
    - Focus         - Media
    - Form          - Image
    - Mouse         - Animation
    - Selection     - Transition
*/

// 이벤트 핸들링

/*  예제 순서.
    1. 컴포넌트 생성 및 불러오기
    2. onChange 이벤트 핸들링하기
    3. 임의 메서드 만들기
    4. Input 여러개 다루기
    5. onKeyPress 이벤트 핸들링하기.
*/

import { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          onChange={(e) => {
            // e 객체는 SynthticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체.
            // 네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용.
            // SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 이벤트가 초기화 되 정보 참조 x
            // 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출.
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

// 버튼 누를떄 comment 값을 공백으로 설정
class EventPractice1 extends Component {
  state = {
    message: '',
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        />
      </div>
    );
  }
}

// 임의 메서드 만들기
// 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달.
// 함수 호출시 this는 호출부에 따라 결정.
// 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버림.
// 임의 메서드가 이벤트로 등록되도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩 해야함.
// 바인딩 하지 않으면 this가 undefined를 가리킴.
// 기본 방식
class EventPractice3 extends Component {
  state = { message: '' };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

// 메서드 바인딩은 생성자 메서드에서 하는게 정석
// 귀찮기 때문에 바벨의 transform-class-properties 문법을 사용해 화살표 함수로 메서드 정의 가능.
class EventPractice4 extends Component {
  state = { message: '' };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

// input 여러개 다루기
// 이벤트 객체를 활용하면 편하다.
// e.target.name 값 사용
// onChange 이벤트 핸들러에서 e.target.name은 해당 input의 name을 가리킴.

//. ex) render 함수에서 name값이 username인 input을 렌더링해 주고,
//      state 쪽에도 username이라는 값을 추가, handleChange 변경.
//      객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용.
/*
  const name = 'variantKey';
  const obj = {
    [name]: 'value'
  };
  {
    'variantKey' : 'value'
  }
*/
class EventPractice5 extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

// onKeyPress 이벤트 핸들링
// ex) 키보드 Enter 키 치면 handleClick 메서드 실행
class EventPractice6 extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
