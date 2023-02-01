import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import Nirvana from '../../public/nirvana.jpg';
import Image from 'next/image';
import { ImageContainerStyle } from './styles';

const Blog = () => {
	return (
		<Grid container spacing={2}>
			<Grid item md={4}>
				<Card sx={{ maxWidth: 260 }}>
					<ImageContainerStyle>
						<Image
							alt='Image Alt'
							src={Nirvana}
							layout='fill'
							objectFit='cover'
							className='image-card'
						/>
					</ImageContainerStyle>
					<CardContent>
						<Typography variant='body1' fontWeight='bold'>
							First Blog
						</Typography>
						<Typography variant='caption'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
							corrupti laudantium odio alias repellendus. Aperiam
						</Typography>
					</CardContent>
					<CardActions>
						<Button>Read</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Blog;
