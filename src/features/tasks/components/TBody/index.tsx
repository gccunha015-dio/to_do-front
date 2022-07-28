import { tbodyClasses } from './style';

function TBody() {
	let tasks = [
		{ id: 1, description: 'Task' },
		{
			id: 2,
			description:
				'shdaslkdhsalkdhaslkdhsalkdhsalkdhsldshaldkhsalkdhasl Task 2',
		},
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 2' },
		{ id: 2, description: 'Task 3' },
	];
	tasks = [];

	return (
		<tbody className={tbodyClasses}>
			{tasks.length
				? tasks.map(({ id, description }, index) => (
						<tr key={index}>
							<td>{id}</td>
							<td>{description}</td>
						</tr>
				  ))
				: null}
		</tbody>
	);
}

export default TBody;
