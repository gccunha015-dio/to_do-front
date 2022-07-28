import TBody from './components/TBody';
import TFooter from './components/TFooter';
import THead from './components/THead';
import { divClasses, tableClasses } from './style';

function Tasks() {
	return (
		<div className={divClasses}>
			<table className={tableClasses}>
				<THead />
				<TBody />
				<TFooter />
			</table>
		</div>
	);
}

export default Tasks;
