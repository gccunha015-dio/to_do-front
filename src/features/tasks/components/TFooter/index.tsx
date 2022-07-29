import CreateFromCSV from '../CreateFromCSV';
import CreateTask from '../CreateTask';
import DeleteSelected from '../DeleteSelected';
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
			<tr>
				<td colSpan={4}>
					<DeleteSelected />
				</td>
			</tr>
		</tfoot>
	);
}

export default TFooter;
