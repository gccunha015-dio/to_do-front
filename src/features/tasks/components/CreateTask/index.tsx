import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import InputSubmit from '../../../../components/InputSubmit';
import LabelledIput from '../../../../components/LabelledInput';
import { createTasks, readTasks } from '../../slice';
import { formClasses } from './style';

function CreateTask() {
	const dispatch = useAppDispatch();
	const description = useRef<HTMLInputElement>(null);
	const isDone = useRef<HTMLInputElement>(null);

	const descriptionProps = { ref: description, label: 'Description' };
	const isDoneProps = {
		ref: isDone,
		label: 'Is Done ?',
		inputProps: { type: 'checkbox' },
	};
	const submitProps = { value: 'Create Task' };
	const createTask = async () => {
		if (!description.current || !isDone.current) return;
		const descriptionValue = description.current.value;
		const isDoneValue = isDone.current.checked;
		await dispatch(
			createTasks([{ description: descriptionValue, isDone: isDoneValue }])
		);
		dispatch(readTasks());
	};
	return (
		<form
			className={formClasses}
			onSubmit={async (event: FormEvent) => {
				event.preventDefault();
				await createTask();
			}}
		>
			<LabelledIput {...descriptionProps} />
			<LabelledIput {...isDoneProps} />
			<InputSubmit {...submitProps} />
		</form>
	);
}

export default CreateTask;
