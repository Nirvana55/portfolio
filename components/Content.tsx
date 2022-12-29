import React from 'react';
import Image from 'next/image';
import Nirvana from '../public/nirvana.jpg';
import { Box, Button, Typography } from '@mui/material';

const Content = () => {
	return (
		<Box
			sx={{ height: '79vh' }}
			display='flex'
			alignItems='center'
			flexDirection='column'
			justifyContent='center'>
			<div>
				<Box sx={{ borderRadius: '50%', border: '3px solid #fff' }}>
					<Image
						height={180}
						width={180}
						className='image-style'
						src={Nirvana}
						alt='Nirvana'
					/>
				</Box>
			</div>
			<Box sx={{ mt: 3 }} textAlign='center'>
				<Typography variant='h3' fontWeight='bold'>
					Hey, Wassup ?
				</Typography>
				<Typography sx={{ mt: 4 }}>NIRVANA here.</Typography>
				<Typography sx={{ mt: 2 }}>Want to work together ?</Typography>
			</Box>
			<Button sx={{ mt: 4 }} size='large' variant='contained'>
				Contact Now
			</Button>
		</Box>
	);
};

export default Content;
