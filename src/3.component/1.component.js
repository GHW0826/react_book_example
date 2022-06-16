// 함수형 컴포넌트, 클래스형 컴포넌트 (ES6 이전은 prototype 문법 사용)
// 차이점은 클래스형 컴포넌트의 경우
// 1. state 기능
// 2. 라이프 사이클 기능 사용 가능
// 3. 임의 메서드 정의가능.
// 클래스형 함수는 render 함수가 꼭 있어야 하고, 그안에 JSX를 반환해야 한다.

// 함수형 컴포넌트
// 1. 메모리 자원이 클래스형 보다 적음.
// 2. 프로젝트 완성후 빌드 배포시 함수 컴포넌트가 결과물의 파일 크기가 더 작다. (별 차이 없긴 함)

// 1. state, 라이프사이클 API사용 불가능. (v16.8 업데이트 이후 hook으로 해결)

// 공식문서는 함수 컴포넌트와 hooks 사용 권장.
function App() {
  return;
}

class App extends Component {
  render() {
    return;
  }
}

// 일반 함수는 종속된 객체를 this로 가리키고,
// 화살표 함수는 종속된 인스턴스를 가리킴.
function BlackDog() {
  this.name = 'black';
  return {
    name: 'white',
    bark: function () {
      console.log(this.name + ' bark!');
    },
  };
}
// white bark!

function WhiteDog() {
  this.name = 'black';
  return {
    name: 'white',
    bark: () => {
      console.log(this.name + ' bark!');
    },
  };
}
// black bark!

const MyConponent = () => {
  return <div>new component</div>;
};

// 다른 파일에서 이 파일 import 시 MyComponent 컴포넌트를 불러오도록 설정
export default MyConponent;
