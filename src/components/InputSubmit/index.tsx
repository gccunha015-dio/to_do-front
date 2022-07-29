import { submitClasses } from './style';

function InputSubmit({ value }: Props) {
	return <input type='submit' value={value} className={submitClasses} />;
}

type Props = {
	value: string;
};

export default InputSubmit;
