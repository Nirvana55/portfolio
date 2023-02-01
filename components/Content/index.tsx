import React from 'react';
import Image from 'next/image';
import Nirvana from '../../public/nirvana.jpg';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ReadMoreButtonStyle } from './style';
import Blog from '../Blog';

const Content = () => {
	const theme = useTheme();

	return (
		<>
			<Box display='flex' justifyContent='space-between' sx={{ mt: 6 }}>
				<Box sx={{ mt: 3, flexBasis: '500px' }}>
					<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
						Hey, Wassup
					</Typography>
					<Typography
						sx={{
							mt: 3,
							lineHeight: 1.8,
						}}
						variant='body2'>
						Full stack web developer who has worked on sites for small and
						medium-sized enterprises. I can assist you in advertising your
						services and design up a whole website to boost your business.
						Profound in HTML,CSS, the MERN stack(React/Node/Mongodb) and
						wordpress.
					</Typography>
					<ReadMoreButtonStyle
						sx={{ mt: 2, color: 'white', padding: 0 }}
						size='medium'>
						Read More About Me
					</ReadMoreButtonStyle>
				</Box>
				<Box sx={{ mt: 5, borderRadius: '50%' }}>
					<Image
						height={140}
						width={140}
						className='image-style'
						src={Nirvana}
						alt='Nirvana'
					/>
				</Box>
			</Box>
			<Box sx={{ mb: 4 }}>
				<Blog />
			</Box>
		</>
	);
};

export default Content;
