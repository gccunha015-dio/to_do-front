import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import InputSubmit from '../../../../components/InputSubmit';
import { deleteTasks, readTasks, selectSelected } from '../../slice';

function DeleteSelected() {
	const dispatch = useAppDispatch();
	const selectedTasks = useAppSelector(selectSelected);

	const deleteSelected = async (event: FormEvent) => {
		event.preventDefault();
		await dispatch(deleteTasks(selectedTasks));
		dispatch(readTasks());
	};

	const submitProps = { value: 'Delete Selected' };
	return (
		<>
			{selectedTasks.length ? (
				<form onSubmit={deleteSelected}>
					<InputSubmit {...submitProps} />
				</form>
			) : null}
		</>
	);
}

export default DeleteSelected;
