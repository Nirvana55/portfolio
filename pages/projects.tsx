import {
	Box,
	Fade,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import WorkInProgress from '../components/WorkInProgress';

const Projects = () => {
	const data = [];

	const theme = useTheme();
	const [searchValue, setSearchValue] = useState('');
	const ipadScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Head>
				<title>N | Projects</title>
			</Head>

			<Fade in>
				<Box sx={{ mb: 4 }}>
					<Typography marginTop={4} variant='h4' fontWeight='bold'>
						Projects
					</Typography>
				</Box>
			</Fade>

			{data.length > 0 ? (
				<Fade in>
					<Box>
						<TextField
							name='search'
							type='text'
							placeholder='Search'
							variant='outlined'
							value={searchValue}
							fullWidth={ipadScreen ? true : false}
							onChange={(e) => setSearchValue(() => e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end' sx={{ cursor: 'pointer' }}>
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</Box>
				</Fade>
			) : (
				<WorkInProgress />
			)}
		</>
	);
};

export default Projects;
