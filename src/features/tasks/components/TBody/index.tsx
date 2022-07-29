import { ChangeEvent } from 'react';
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
	// tasks = [];
	let selectedTasks = [] as number[];

	const selectTask = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const taskId = Number(target.value);
		if (isNaN(taskId)) return;
		target.checked
			? selectedTasks.push(taskId)
			: selectedTasks.findIndex(
					(value, index) => value === taskId && selectedTasks.splice(index, 1)
			  );
	};

	return (
		<tbody className={tbodyClasses}>
			{tasks.length
				? tasks.map(({ id, description }, index) => {
						const checkBoxProps = { taskId: id, onChange: selectTask };
						return (
							<tr key={index}>
								<td>
									<CheckBox {...checkBoxProps} />
								</td>
								<td>{description}</td>
							</tr>
						);
				  })
				: null}
		</tbody>
	);
}

function CheckBox({ taskId, onChange }: CheckBoxProps) {
	return <input type='checkbox' value={taskId} onChange={onChange} />;
}

type CheckBoxProps = {
	taskId: number;
	onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export default TBody;
