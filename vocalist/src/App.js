import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
{
  /* index.html의 div #root 밑에 구현되는 부분이다.
작성, 수정, 삭제등 조작하면 브라우저에 바로 반영(Hot Module Replacement) 
ctrl + c로 프로젝트를 종료. npm start로 다시 실행
start: 프로젝트 실행. build: 배포모드 전환. eject: 내부 설정파일을 꺼냄 => 웹핵 || 바벨 설정을 변경할 때 사용*/
}
{
  /* react 내에서 class는 className => class는 html 예약어 이기 때문
  JSX란? 자바스크립트 내에 HTML처럼 마크업 언어로 작성된 형태
  */
}
{
  /*리액트로 만든 페이지는 컴포넌트로 구성. 기존의 페이지 별로 구현하는 것이 아닌 각 부분을 컴포넌트로 조립하여 구성
  => 비슷한 부분은 코드를 재사용할 수 있으며, 유지보수에 용이한 장점을 가진다 (e.g. 포털 메인 페이지의 메뉴 컴포넌트, 로그인 컴포넌트, 헤더 컴포넌트 등 ) 
  함수의 형태로 만들어진 함수형 컴포넌트(App()). 코드 컨벤션을 따라 대문자로 시작
  함수가 반환하는 것은 JSX (JavaScript XML)이다*/
}
{
  /* 변경사항을 저장하면 자동으로 반영
  package.json 파일의 dependency에 프로젝트에 필요한 모듈 (node_module) 이 저장되어있음.
  보통 용량이 크기 때문에 깃허브에 올리지 않는다. 그러나 올릴 경우, 다른 개발자가 동일한 환경 개척가능
  대부분의 작업은 src 폴더 내의 파일에서 진행됨*/
}
function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <Welcome />
    </div>
  );
}
{
  /* 디폴트로 export되어 index.html에서 import 됨*/
}
export default App;
