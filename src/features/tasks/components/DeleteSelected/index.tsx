import { FormEvent } from 'react';
import InputSubmit from '../../../../components/InputSubmit';

function DeleteSelected() {
	const selectedTasks = [1] as number[];

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
