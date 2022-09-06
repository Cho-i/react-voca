import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';

function Day() {
	const { day } = useParams();
	const wordList = dummy.words.filter(word => word.day === Number(day));

	// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
	// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
	const obj = { firstName: 'Ungmo', lastName: 'Lee' };
	const { lastName, firstName } = obj;
	console.log(firstName, lastName);

	return (
		<>
			<h2>Day {day}</h2>
			<table>
				<tbody>
					{
						wordList.map(word => (
							<tr key={word.id}>
								<td>{word.eng}</td>
								<td>{word.kor}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</>

	)
}

export default Day;