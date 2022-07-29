import { ChangeEvent } from 'react';
import { theadClasses } from './style';

function THead() {
	const tasks = [] as number[];

	const selectAll = (event: ChangeEvent<HTMLInputElement>) => {
		console.log('Selected All');
	};

	const columns = [
		<input type='checkbox' onChange={selectAll} disabled={!tasks.length} />,
		<p>DESCRIPTION</p>,
		<p>IS DONE</p>,
		<p>CREATED AT</p>,
	];
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
