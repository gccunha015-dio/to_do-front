import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectAll, toggleAll } from '../../slice';
import { theadClasses } from './style';

function THead() {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(selectAll);

	const toggleAllTasks = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(toggleAll(event.target.checked));
	};

	const columns = [
		<input
			type='checkbox'
			onChange={toggleAllTasks}
			disabled={!tasks.length}
		/>,
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
