import React from 'react';
import Image from 'next/image';
import Nirvana from '../public/nirvana.jpg';
import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const Content = () => {
	return (
		<Box
			sx={{ mt: 18 }}
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
			{/* <Box
				sx={{ mt: 4, p: '0.5rem 2rem', borderRadius: '5px' }}
				display='flex'
				bgcolor='white'
				textAlign='center'>
				<Link href='/'>
					<GitHubIcon fontSize='large' sx={{ color: 'black' }} />
				</Link>
				<Link href='/'>
					<LinkedInIcon fontSize='large' sx={{ color: 'black', ml: 2 }} />
				</Link>
			</Box> */}
			<Button sx={{ mt: 4 }} size='large' variant='contained'>
				Contact Now
			</Button>
		</Box>
	);
};

export default Content;
