//jsx 문법을 사용하는 jsx 파일

// 노드의 모듈 시스템으로 npm에 설치한 react, react-dom을 불러온다
const React = require("react");
const ReactDom = require("react-dom");

const WordTail = require("./WordTail");

React.render(<WordTail />, document.querySelector("#root"));
