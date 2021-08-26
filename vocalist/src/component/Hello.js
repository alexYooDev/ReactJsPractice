import World from './World';

// const Hello = () => {
//   <p>Hello</p>;
// };
{
  /* jsx는 하나의 태그만 만들 수 있기 때문에, 복수의 태그를 전해주려면 한 태그로 묶어야 함 */
}
export default function Hello() {
  return (
    <>
      <h1>Hello</h1>
      <World />
      <World />
    </>
  );
}
