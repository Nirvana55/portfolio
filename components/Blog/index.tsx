import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Nirvana from '../../public/nirvana.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ImageContainerStyle, SeeAllPostButtonStyle } from './style';

const Blog = () => {
	return (
		<Box sx={{ mt: 10 }}>
			<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
				Recent Posts
			</Typography>
			<Box sx={{ mt: 4 }}>
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
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Sequi corrupti laudantium odio alias repellendus. Aperiam
								</Typography>
							</CardContent>
							<CardActions>
								<Button>Read</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ float: 'right', mt: 3, mb: 3 }}>
				<SeeAllPostButtonStyle>
					See All Posts <ArrowRightAltIcon sx={{ pl: 1 }} />
				</SeeAllPostButtonStyle>
			</Box>
		</Box>
	);
};

export default Blog;
