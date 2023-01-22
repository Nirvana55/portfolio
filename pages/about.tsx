import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Nirvana from '../public/nirvana.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {
	const theme = useTheme();
	const mobileScreen = useMediaQuery(theme.breakpoints.down('xl'));
	const ipadScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box sx={{ p: '0 1.5rem' }}>
			<Typography marginTop={0.5} variant='h4' fontWeight='bold'>
				About Me
			</Typography>
			<Box
				display='flex'
				flexDirection={mobileScreen ? 'column' : 'row'}
				sx={{ p: '2rem 1rem' }}>
				<Box>
					<Box
						sx={{
							border: '2px solid white',
							padding: '0.8rem',
							width: '200px',
							borderRadius: '5px',
						}}>
						<Image src={Nirvana} height={200} width={200} alt='Nirvana' />
					</Box>
					<Typography marginTop='1rem' variant='h6'>
						Nikhil Lama
					</Typography>
					<Typography marginTop='1rem' variant='caption'>
						WEB DEVELOPER / NETWORK SECURITY
					</Typography>
				</Box>

				<Box marginLeft={ipadScreen ? 0 : 4}>
					<Typography variant='body1' sx={{ lineHeight: '30px' }}>
						Full stack web developer who has worked on sites for small and
						medium-sized enterprises. I can assist you in advertising your
						services and design up a whole website to boost your business.
						Profound in HTML,CSS, the MERN stack(React/Node/Mongodb) and
						wordpress.
					</Typography>
					<Typography variant='h6' fontWeight='bold' marginTop={2}>
						Timeline:
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
