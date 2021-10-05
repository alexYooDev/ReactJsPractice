//jsx 문법을 사용하는 jsx 파일

// 노드의 모듈 시스템으로 npm에 설치한 react, react-dom을 불러온다
import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

const NumberBaseBall = require("./NumberBaseBall");

const Hot = hot(NumberBaseBall);

React.render(<Hot />, document.querySelector("#root"));
