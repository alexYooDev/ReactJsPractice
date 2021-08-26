import { useState } from 'react';

export default function Hello() {
  {
    //let name = 'Alex';
    /*state가 아닌 변수 (컴포넌트가 관리하고 있는 상태 값이 아니다.)
  변화가 생겨도 리액트는 인지못함. UI를 업데이트 하지 않는다.
  초기 리액트: state와 lifeCycle을 관리하려면 클래스형 컴포넌트를 만들어야 했음.
  UI만 표현하는 컴포넌트를 함수형으로 제작.
  16.8 버전 부터는 모든 컴포넌트를 함수형을 제작. 
  React 훅을 이용해서 함수형 컴포넌트에서도 state와 lifeCycle 관리가 가능해짐.
  
  */
  }
  const [name, setName] = useState('Alex'); // useState == 배열을 반환 첫번째 값은 state명, 두 번째 값은 state를 변경하는 함수

  {
    /*function changeName() {
    //document.querySelector('#name').innerText = name;
    setName(name === 'Alex' ? 'James' : 'Alex');
  }*/
  }
  return (
    <>
      <h1>state</h1>
      <h2>컴포넌트의 속성 값</h2>
      <h2 id="name">{name}</h2>
      <button
        onClick={() => {
          setName(name === 'Alex' ? 'James' : 'Alex');
        }}
      >
        change
      </button>
      {/*속성 값이 변하면 자동으로 UI를 업데이트. 화면을 다시 렌더하지 않아도 되는 편리함이 있음*/}
    </>
  );
}
{
  /* React에서 이벤트를 걸려면 
  1.미리 함수를 만들어 전달하는 방법
  2. onClick attribute 안에 함수를 직접 작성하는 법 => 장점: 매개변수를 전달하기 용이하다.
  이 있다. */
}
