import { FormEvent } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import InputSubmit from '../../../../components/InputSubmit';
import { selectSelected } from '../../slice';

function DeleteSelected() {
	const selectedTasks = useAppSelector(selectSelected);

	const deleteSelected = (event: FormEvent) => {
		event.preventDefault();
		console.log('Delete selected tasks');
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
