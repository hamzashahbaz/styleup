import Header from '../global/header';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
