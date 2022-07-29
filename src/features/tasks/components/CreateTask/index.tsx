import { FormEvent, useRef } from 'react';
import InputSubmit from '../../../../components/InputSubmit';
import LabelledIput from '../../../../components/LabelledInput';
import { formClasses } from './style';

function CreateTask() {
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
		const creationDate = new Date().toLocaleString();
		console.log(descriptionValue);
		console.log(isDoneValue);
		console.log(creationDate);
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
