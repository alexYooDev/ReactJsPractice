export default function Hello() {
  const showName = () => {
    const name = 'Alexander';
    console.log(name);
  };
  const showAge = () => {
    const age = 26;
    console.log(age);
  };
  return (
    <>
      <h1>Hello</h1>
      {/* 이름 콘솔 창에 출력 */}
      <button onClick={showName}>Show Name</button>
      {/* 나이 콘솔 창에 출력 */}
      <button onClick={showAge}>Show Age</button>
    </>
  );
}
{
  /* React에서 이벤트를 걸려면 미리 함수를 만들어 전달하는 방법이 있다. */
}
