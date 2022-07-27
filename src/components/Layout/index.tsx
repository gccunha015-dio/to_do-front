const flexCentered = `
  flex
  flex-1
  items-center
  place-content-center
`;

const layoutClasses = `
  grid
  grid-cols-1
  h-screen
  text-center
  place-items-stretch
`;
const headerClasses = `
  ${flexCentered}
  bg-teal-400
`;
const mainClasses = `
  ${flexCentered}
  row-span-6
  bg-teal-500
`;
const footerClasses = `
  ${flexCentered}
  bg-teal-600
`;

function Layout() {
	return (
		<div className={layoutClasses}>
			<header className={headerClasses}>Header</header>
			<main className={mainClasses}>Main</main>
			<footer className={footerClasses}>Footer</footer>
		</div>
	);
}

export default Layout;
