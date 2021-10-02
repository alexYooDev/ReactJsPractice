// 파일을 분리하여 유지보수, 효율적으로 필요 모듈을 내보낸다.

const React = require("react");
const { Component } = React;
class WordTail extends Component {
  state = {};

  render() {}
}

//client.jsx 파일에서 불러올 수 있다.
module.exportes = WordRelay;
