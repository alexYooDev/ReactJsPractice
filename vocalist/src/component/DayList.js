import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// API 적용으로 dummy data 지움

//useEffect Hook: 어떤 상태 값이 바뀌었을 때 동작하는 함수를 작성할 수 있다.
//렌더링을 끝내고 작업을 하고 싶은 경우 (API 호출) : useEffect의 첫번째 매개변수로 함수를 넘겨준다.
// API 비동기 통신 :fetch 사용 : API 경로를 넘겨주면 params로 반환
// response 매개변수 : http response -> json메서드를 사용해 json 형식으로 변환 params 반환
export default function DayList() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);

  return (
    <ul className="list_day">
      {/* 반복문으로 여러 개 요소를 만들 때에는 map 사용 */}
      {days.map((day) => (
        <li key={day.id}>
          {/* 페이지 간 이동은 a href 대신 Link to 사용 */}
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
