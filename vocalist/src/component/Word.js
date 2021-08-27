import { useState } from 'react';

export default function Word({ word }) {
  {
    /* 단어 표시 유뮤를 체크하는 상태값: 초기 값은 false */
  }

  // 상태값을 조작하여 뜻의 표시, 체크박스 체크 상태 저장
  const [isShowing, setShow] = useState(false);
  const [isDone, setCheck] = useState(word.isDone);

  // 토글 함수 : 외우기 완료 단어, 단어보여주기
  function toggleCheck() {
    setCheck(!isDone);
  }
  function toggleShow() {
    setShow(!isShowing);
  }
  return (
    <div>
      <tr className={isDone ? 'off' : ''}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleCheck} />
        </td>
        <td>{word.eng}</td>
        <td>{isShowing && word.kor}</td>
        <td>
          <button onClick={toggleShow}>뜻 {isShowing ? '숨김' : '보기'}</button>
          <button className="btn_del">삭제</button>
        </td>
      </tr>
    </div>
  );
}

{
  /** 
  유저와 상호작용하는 데이터를 위해 제이슨 서버를 설치하고 연결한다.
  PS C:\Users\유대식\Desktop\Frontend Practice\ReactJsPractice\vocalist> npm install -g json-server
  C:\Users\유대식\AppData\Roaming\npm\json-server -> C:\Users\유대식\AppData\Roaming\npm\node_modules\json-server\lib\cli\bin.js   
  + json-server@0.16.3
  added 182 packages from 80 contributors in 16.974s
  PS C:\Users\유대식\Desktop\Frontend Practice\ReactJsPractice\vocalist> json-server --watch ./src/DB/data.json --port 3001

  REST API: URI 주소와 메서드로 CRUD를 정의하는 것.
   * create: post http://localhost:3001/words?day=1  day 값이 1인 데이터의 목록만 가져온다.
   * read:  get http://localhost:3001/words/2 뒤에 인덱스 번호를 입력해서 get 메서드로 읽는다.
   * update: put 
   * delete: delete
   * json-server로 watch 한 이후 작업들은 컴퓨터에 변화에 따라서 같이 저장된다.
 */
}
