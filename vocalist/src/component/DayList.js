import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// API 적용으로 dummy data 지움

//useEffect Hook: 어떤 상태 값이 바뀌었을 때 동작하는 함수를 작성할 수 있다.
export default function DayList() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    console.log('reacted');
  });
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
