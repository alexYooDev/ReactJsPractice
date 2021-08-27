import dummy from '../DB/data.json';

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {/* 반복문으로 여러 개 요소를 만들 때에는 map 사용 */}
      {dummy.days.map((day) => (
        <li key={day.id}>Day {day.day}</li>
      ))}
    </ul>
  );
}
