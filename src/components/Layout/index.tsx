import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import layoutClasses from './style';

function Layout() {
	return (
		<div className={layoutClasses}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default Layout;
