import styles from './Hello.module.css';

// const Hello = () => {
//   <p>Hello</p>;
// };
{
  /* jsx는 하나의 태그만 만들 수 있기 때문에, 복수의 태그를 전해주려면 한 태그로 묶어야 함 */
}
{
  /*
  css 적용 1: JSX 태그 안에 인라인으로 작성한다. (특별한 경우가 아니면 사용 X)

*/
}
export default function Hello() {
  return (
    <>
      <h1
        style={{
          color: 'green',
          borderRight: '2px solid white',
          marginBottom: '30px',
          opacity: 0.5,
        }}
      >
        Hello
      </h1>
      {/* 파일명을 달리 해서 구분을 해도 같은 ClassName이면 속성이 over-rel-ing 됨
      컴포넌트의 head 부분에 들어가기 때문에 모든 컴포넌트에 영향을 미친다. => 이름.module.css로 해야 분리 */}
      <div className={styles.box}>Hello</div>
    </>
  );
}
