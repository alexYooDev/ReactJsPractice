import dummy from '../DB/data.json';
import { Link } from 'react-router-dom';

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {/* 반복문으로 여러 개 요소를 만들 때에는 map 사용 */}
      {dummy.days.map((day) => (
        <li key={day.id}>
          {/* 페이지 간 이동은 a href 대신 Link to 사용 */}
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
