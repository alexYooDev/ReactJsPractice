import { useState } from 'react';
import UserName from './UserName';

export default function Hello({ age }) {
  {
    //let name = 'Alex';
    /*state가 아닌 변수 (컴포넌트가 관리하고 있는 상태 값이 아니다.)
  변화가 생겨도 리액트는 인지못함. UI를 업데이트 하지 않는다.
  초기 리액트: state와 lifeCycle을 관리하려면 클래스형 컴포넌트를 만들어야 했음.
  UI만 표현하는 컴포넌트를 함수형으로 제작.
  16.8 버전 부터는 모든 컴포넌트를 함수형을 제작. 
  React 훅을 이용해서 함수형 컴포넌트에서도 state와 lifeCycle 관리가 가능해짐.
  
  state &props : 화면에 데이터를 갱신하기 위해 항상 주로 사용
  */
  }
  const [name, setName] = useState('Alex'); // useState == 배열을 반환 첫번째 값은 state명, 두 번째 값은 state를 변경하는 함수
  const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';
  //const [age, increaseAge] = useState(props.age);
  // props.age = 100; => TypeError: Cannot assign to read only property 'age' of object '#<Object>'

  {
    /*function changeName() {
    //document.querySelector('#name').innerText = name;
    setName(name === 'Alex' ? 'James' : 'Alex');
  }*/
  }
  return (
    <>
      <h1>state</h1>
      <h2>props: properties(속성값)</h2>
      {/*속성값은 컴포넌트 내부에서 변경 불가. 넘겨받은 그대로 사용.
      변경 시, 컴포넌트 내부에서 state를 다시 만들어야 함*/}
      <h2 id="name">
        {/* Hello의 name와 UserName 컴포넌트의 name 둘다 변경 ]
        개발자가 데이터만 적절히 변경하면, 컴포넌트가 스스로 렌더링하여 화면의 UI 정보 갱신
        일일히 어떤 요소를 어떤 값으로 바꿀 지 고민할 필요 X*/}
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
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
