import { ForwardedRef, forwardRef } from 'react';
import { labelClasses, inputClasses } from './style';

const LabelledIput = forwardRef(
	({ label, inputProps }: Props, ref: ForwardedRef<HTMLInputElement>) => (
		<label className={labelClasses}>
			{label}
			<input ref={ref} {...inputProps} className={inputClasses} />
		</label>
	)
);

type Props = {
	label: string;
	inputProps?: { type?: string };
};

export default LabelledIput;
