import CreateFromCSV from '../CreateFromCSV';
import CreateTask from '../CreateTask';
import { tfootClasses } from './style';

function TFooter() {
	return (
		<tfoot className={tfootClasses}>
			<tr>
				<td colSpan={4}>
					<CreateTask />
				</td>
			</tr>
			<tr>
				<td colSpan={4}>
					<CreateFromCSV />
				</td>
			</tr>
		</tfoot>
	);
}

export default TFooter;
