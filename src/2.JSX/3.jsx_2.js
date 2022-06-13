// 인라인 스타일링
// 리액트에서 DOM 요소에 스타일을 적용시 문자열로 넣는게 아니라
// 객체 형태로 넣어야 함.
// (e.g background-color 처럼 - 문자가 포함되는 이름이 있다면 카멜표기법으로 적어야함)

// 방법 2개
// 1. 스타일 미리 선언후 여러번 사용.
function App() {
    const name = 'react';
    const style = {
        backgroundColor : 'black',
        color: 'aqua',
        fontsize: '48px',
        fontWeight: 'bold',
        padding: 16
    };
    return <div style= {style}>{name}</div>
}

// 2. 바로사용 재사용 안됨.
function App() {
    const name = 'react';
    return <div style= {{
        backgroundColor : 'black',
        color: 'aqua',
        fontsize: '48px',
        fontWeight: 'bold',
        padding: 16
    }}>{name}</div>
}


// class 대신 className
// 일반 HTML 에서 css클래스 사용시 class="xxx" 가 아니라 className="xxx"로 설정해야함.
import "../App.css";
function App() {
    const name = 'react';
    return <div className="react-test">{name}</div>
}
// class도 되긴하는데 경고 뜸.
// 리액스 v16이상부터는 변환시켜서 경고 띄운다.

// 꼭 닫아야 하는 태그
// HTML태그는 가끔 닫지 않은 상태로 코드 작성하기도 함.
// (e.g) <input>, <br>
// JSX에서는 태그 안닫으면 오류 발생.
// self-closing 태그는 가능한듯 <input />


// 주석
// JSX내부에선 주석을 {/* */}  이렇게 사용
// 시작태그를 여러줄 작성시 주석 가능 다른데서는  //나 /*는 페이지에 그대로 노출된다.
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



export default App;