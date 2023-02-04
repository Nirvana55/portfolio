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
import { BlogsData } from '../../types/blogData';

interface BlogPosts {
	blogs: BlogsData[];
}

const Blog = ({ blogs }: BlogPosts) => {
	return (
		<Grid container spacing={2}>
			<Grid item md={4}>
				{blogs?.map((blogs) => (
					<Card key={blogs.slug} sx={{ maxWidth: 260 }}>
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
								{blogs.frontmatter.title}
							</Typography>
							<Typography variant='caption'>
								{blogs.frontmatter.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button>Read</Button>
						</CardActions>
					</Card>
				))}
			</Grid>
		</Grid>
	);
};

export default Blog;
