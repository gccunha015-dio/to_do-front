import tasksClasses from './style';

const columns = ['ID', 'DESCRIPTION'];

const tasks = [
	{ id: 1, description: 'Task' },
	{
		id: 2,
		description: 'shdaslkdhsalkdhaslkdhsalkdhsalkdhsldshaldkhsalkdhasl Task 2',
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
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 2, description: 'Task 2' },
	{ id: 3, description: 'Task 3' },
];

function Tasks() {
	return (
		<div className='h-full'>
			<table className={tasksClasses}>
				<thead className='bg-indigo-900 w-full border-2 border-indigo-900 rounded-t-lg'>
					<tr className='flex justify-evenly'>
						{columns.map((column, index) => (
							<th key={index}>{column}</th>
						))}
					</tr>
				</thead>
				<tbody className='overflow-y-auto w-full border-2 border-indigo-900 rounded-b-lg'>
					{tasks.map(({ id, description }, index) => (
						<tr key={index} className='hover:bg-indigo-900 flex justify-evenly'>
							<td className='px-8'>{id}</td>
							<td className='px-8'>{description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Tasks;
