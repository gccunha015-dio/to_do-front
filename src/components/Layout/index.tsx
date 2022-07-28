import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import { divClasses } from './style';

function Layout() {
	return (
		<div className={divClasses}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default Layout;
