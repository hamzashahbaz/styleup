import Layout from '../components/layouts/default';
import Head from 'next/head';

export default function Index({ posts }) {
	return (
		<>
			<Layout>
				<Head>
					<title>Fiber css</title>
				</Head>
				<h1>Fiber css</h1>
			</Layout>
		</>
	);
}
