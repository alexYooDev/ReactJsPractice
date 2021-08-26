export default function Hello() {
  const showName = () => {
    const name = 'Alexander';
    console.log(name);
  };
  const showAge = (age) => {
    console.log(age);
  };
  const showText = (txt) => {
    console.log(txt);
  };
  return (
    <>
      <h1>Hello</h1>
      {/* 이름 콘솔 창에 출력 */}
      <button onClick={showName}>Show Name</button>
      {/* 나이 콘솔 창에 출력 */}
      <button
        onClick={() => {
          showAge(26);
        }}
      >
        Show Age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          console.log(e.target.value);
          console.log(txt);
        }}
      ></input>
    </>
  );
}
{
  /* React에서 이벤트를 걸려면 
  1.미리 함수를 만들어 전달하는 방법
  2. onClick attribute 안에 함수를 직접 작성하는 법 => 장점: 매개변수를 전달하기 용이하다.
  이 있다. */
}
