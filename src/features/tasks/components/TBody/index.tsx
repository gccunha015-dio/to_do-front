import { ChangeEvent, useEffect } from 'react';
import { TTask } from '../../../../@types';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
	readTasks,
	selectAll,
	selectSelected,
	toggleOne,
	updateTask,
} from '../../slice';
import { tbodyClasses } from './style';

function TBody() {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(selectAll);
	const selectedTasks = useAppSelector(selectSelected);

	useEffect(() => {
		dispatch(readTasks());
	}, [dispatch]);

	const selectTask = (event: ChangeEvent<HTMLInputElement>) =>
		dispatch(toggleOne(Number(event.target.value)));

	const markTaskAsDone = async (task: TTask) => {
		await dispatch(updateTask(task));
		dispatch(readTasks());
	};

	return (
		<tbody className={tbodyClasses}>
			{tasks.length
				? tasks.map((task, index) => {
						const { id, description, isDone, createdAt } = task;
						if (!id || !description || !createdAt) return null;
						const checkBoxProps = {
							taskId: id,
							checked: selectedTasks.includes(id),
							onChange: selectTask,
						};
						const isDoneProps = {
							taskId: id,
							checked: isDone,
							onChange: async (event: ChangeEvent<HTMLInputElement>) =>
								await markTaskAsDone({ ...task, isDone: event.target.checked }),
						};
						const createdAtDatetime = new Date(createdAt);
						return (
							<tr key={index}>
								<td>
									<CheckBox {...checkBoxProps} />
								</td>
								<td>{description}</td>
								<td>
									<CheckBox {...isDoneProps} />
								</td>
								<td>{createdAtDatetime.toLocaleString()}</td>
							</tr>
						);
				  })
				: null}
		</tbody>
	);
}

function CheckBox({ taskId, checked, onChange }: CheckBoxProps) {
	return (
		<input
			type='checkbox'
			checked={checked}
			value={taskId}
			onChange={onChange}
		/>
	);
}

type CheckBoxProps = {
	taskId: number;
	checked?: boolean;
	onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export default TBody;
