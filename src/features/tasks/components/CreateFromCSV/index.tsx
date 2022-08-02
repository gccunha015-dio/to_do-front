import { ChangeEvent, FormEvent, useState } from 'react';
import { TTask } from '../../../../@types';
import { useAppDispatch } from '../../../../app/hooks';
import FileSelector from '../../../../components/FileSelector';
import InputSubmit from '../../../../components/InputSubmit';
import { createTasks, readTasks } from '../../slice';
import { formClasses } from './style';

function CreateFromCSV() {
	const dispatch = useAppDispatch();
	const [file, setFile] = useState<File>();
	const [fileData, setFileData] = useState<TTask[]>([]);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (!fileData.length) return;
		await dispatch(createTasks(fileData));
		dispatch(readTasks());
		setFile(undefined);
		setFileData([]);
	};

	const readAndParseCSV = (file: File) => {
		const reader = new FileReader();
		reader.onload = ({ target }) => parseCSV(target?.result as string);
		reader.readAsText(file);
	};

	const parseCSV = (text: string) => {
		const rows = text.split('\n');
		rows.splice(0, 1);
		setFileData(
			rows.map((row) => {
				const [description, isDone] = row.split(',');
				return { description, isDone: isDone === 'true' };
			})
		);
	};

	const fileSelectorProps = {
		label: 'Choose CSV file to create multiple tasks at once',
		inputProps: {
			onChange: (event: ChangeEvent<HTMLInputElement>) => {
				const target = event.target;
				const files = target.files;
				setFile(
					files && files[0] && files[0].type.endsWith('csv')
						? files[0]
						: undefined
				);
				if (!files || !files[0]) return;
				readAndParseCSV(files[0]);
				target.value = '';
			},
		},
	};

	const submitProps = { value: `Create from ${file?.name}` };
	return (
		<form className={formClasses} onSubmit={handleSubmit}>
			<FileSelector {...fileSelectorProps} />
			{file ? <InputSubmit {...submitProps} /> : null}
		</form>
	);
}

export default CreateFromCSV;
