import Header from '../components/header';
import Meta from '../components/meta';
import Footer from '../components/footer';

export default function Layout({ children }) {
	return (
		<>
			<Meta />
			<Header />
			<main>{children}</main>
		</>
	);
}
