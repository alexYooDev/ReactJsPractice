import dummy from '../DB/data.json';

export default function Day() {
  const day = 2;
  const wordList = dummy.words.filter((word) => word.day === 1);
  console.log(wordList);
  return (
    <div>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
