import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// API 적용으로 dummy data 지움

//useEffect Hook: 어떤 상태 값이 바뀌었을 때 동작하는 함수를 작성할 수 있다.
//렌더링을 끝내고 작업을 하고 싶은 경우 (API 호출) : useEffect의 첫번째 매개변수로 함수를 넘겨준다.
export default function DayList() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
  }
  function changeDays() {
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  }
  // 해당 함수를 실행하지 않았어도 계속 실행 : 무거운 기능이라면 문제 (불필요한 작업)
  // 의존성 배열을 넘겨주어 해당 State가 변경될 때만 실행
  // useEffect => API 호출 시 사용 (렌더링이 완료되고 최초 한번만 API를 호출 = 빈배열 사용)
  useEffect(() => {
    console.log('reacted');
  }, []);
  return (
    <>
      <ul className="list_day">
        {/* 반복문으로 여러 개 요소를 만들 때에는 map 사용 */}
        {days.map((day) => (
          <li key={day.id}>
            {/* 페이지 간 이동은 a href 대신 Link to 사용 */}
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>{count}</button>
      <button onClick={changeDays}>Day Change</button>
    </>
  );
}
