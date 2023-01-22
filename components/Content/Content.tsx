import React from 'react';
import Image from 'next/image';
import Nirvana from '../../public/nirvana.jpg';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';

const Content = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Box
			display='flex'
			alignItems='center'
			flexDirection='column'
			justifyContent='center'
			sx={{ mt: 14 }}>
			<Box sx={{ borderRadius: '50%', border: '3px solid #fff' }}>
				<Image
					height={140}
					width={140}
					className='image-style'
					src={Nirvana}
					alt='Nirvana'
				/>
			</Box>
			<Box sx={{ mt: 3 }} textAlign='center'>
				<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
					Hey, Wassup ?
				</Typography>
				<Typography
					sx={{
						mt: 3,
					}}>
					NIRVANA here.
				</Typography>
				<Typography sx={{ mt: 2 }}>Want to work together ?</Typography>
			</Box>
			<Button sx={{ mt: 4 }} size='medium' variant='contained'>
				Contact Now
			</Button>
		</Box>
	);
};

export default Content;
