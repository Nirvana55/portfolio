import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Nirvana from '../public/nirvana.jpg';

const About = () => {
	return (
		<Box sx={{ height: '79vh', pl: '2.5rem', pr: '2.5rem', mt: 3 }}>
			<Typography variant='h4' fontWeight='bold'>
				About Me
			</Typography>
			<Box display='flex' sx={{ p: '2rem 1rem' }}>
				<Box width={750} sx={{}}>
					<Box sx={{ border: '2px solid white', borderRadius: '5px' }}>
						<Image src={Nirvana} alt='Nirvana' />
					</Box>
					<Typography marginTop='1rem' variant='h5'>
						Nikhil Lama
					</Typography>
					<Typography marginTop='1rem' variant='body1'>
						WEB DEVELOPER
					</Typography>
				</Box>

				<Box marginLeft={4}>
					<Typography variant='body1' sx={{ lineHeight: '30px' }}>
						Full stack web developer who has worked on sites for small and
						medium-sized enterprises. I can assist you in advertising your
						services and design up a whole website to boost your business.
						Profound in HTML,CSS, the Mern stack(React/Node/Mongodb) and
						wordpress.
					</Typography>
					<Typography variant='h6' fontWeight='bold' marginTop={2}>
						Timeline:
					</Typography>
					<Box></Box>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
