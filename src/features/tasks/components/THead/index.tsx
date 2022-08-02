import { ChangeEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectAll, selectSelected, toggleAll } from '../../slice';
import { theadClasses } from './style';

function THead() {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(selectAll);
	const selectedTasks = useAppSelector(selectSelected);
	const checkbox = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (selectedTasks.length || !checkbox.current) return;
		checkbox.current.checked = false;
	}, [selectedTasks]);

	const toggleAllTasks = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(toggleAll(event.target.checked));
	};

	const columns = [
		<input
			type='checkbox'
			onChange={toggleAllTasks}
			disabled={!tasks.length}
			ref={checkbox}
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
