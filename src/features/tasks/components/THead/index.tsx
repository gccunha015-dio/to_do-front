import { theadClasses } from './style';

function THead() {
	const columns = ['ID', 'DESCRIPTION', 'IS DONE', 'CREATED AT'];
	return (
		<thead className={theadClasses}>
			<tr>
				{columns.map((column, index) => (
					<th key={index}>{column}</th>
				))}
			</tr>
		</thead>
	);
}

export default THead;
