import { ChangeEvent, FormEvent, useState } from 'react';
import FileSelector from '../../../../components/FileSelector';
import InputSubmit from '../../../../components/InputSubmit';
import { formClasses } from './style';

function CreateFromCSV() {
	const [file, setFile] = useState<string>('');

	const fileSelectorProps = {
		label: 'Choose CSV file to create multiple tasks at once',
		inputProps: {
			onChange: (event: ChangeEvent<HTMLInputElement>) =>
				setFile(event.target.value.split('\\')[2]),
		},
	};
	const submitProps = { value: `Create from ${file}` };
	return (
		<form
			className={formClasses}
			onSubmit={(event: FormEvent) => {
				event.preventDefault();
			}}
		>
			<FileSelector {...fileSelectorProps} />
			{file ? <InputSubmit {...submitProps} /> : null}
		</form>
	);
}

export default CreateFromCSV;
