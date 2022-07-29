import { ChangeEvent } from 'react';
import { inputClasses, labelClasses } from './style';

function FileSelector({ label, inputProps }: Props) {
	return (
		<label className={labelClasses}>
			{label}
			<input
				type='file'
				accept='text/csv'
				className={inputClasses}
				{...inputProps}
			/>
		</label>
	);
}

type Props = {
	label: string;
	inputProps: { onChange(event: ChangeEvent<HTMLInputElement>): void };
};

export default FileSelector;
