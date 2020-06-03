import Header from '../global/header';
import Meta from '../meta';

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<Header />
			<main>{children}</main>
		</>
	);
}
