import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import { useMemo, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Navbar/Navbar';
import getTheme from '../config';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const selectTheme = useMemo(() => {
		let theme = createTheme(getTheme(isDarkMode ? 'dark' : 'light'));
		return theme;
	}, [isDarkMode]);

	return (
		<>
			<ThemeProvider theme={selectTheme}>
				<CssBaseline />
				<Layout>
					<NavBar />
					<Component {...pageProps} />
					<Footer />
				</Layout>
			</ThemeProvider>
		</>
	);
}
