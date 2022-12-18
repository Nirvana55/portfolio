import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import { theme } from '../config/theme';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Layout>
					<NavBar />
					<Component {...pageProps} />
					<Footer />
				</Layout>
			</ThemeProvider>
		</>
	);
}
