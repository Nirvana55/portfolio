import {
	Button,
	Card,
	CardActions,
	CardContent,
	Fade,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import Nirvana from '../../public/nirvana.jpg';
import Image from 'next/image';
import { CardContainer, ImageContainerStyle } from './styles';
import { BlogsData } from '../../types/blogData';
import Link from 'next/link';

interface BlogPosts {
	blogs: BlogsData[];
}

const Blog = ({ blogs }: BlogPosts) => {
	return (
		<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 11 }}>
			{blogs?.map((blogs) => (
				<Grid key={blogs.slug} item xs={3.5} sm={4} md={3.6}>
					<Fade in={true}>
						<CardContainer>
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
							<CardActions sx={{ float: 'right', marginBottom: 0.3 }}>
								<Link href={`blog/${blogs.slug}`}>
									<Button sx={{ color: 'white' }} size='small'>
										Read More
									</Button>
								</Link>
							</CardActions>
						</CardContainer>
					</Fade>
				</Grid>
			))}
		</Grid>
	);
};

export default Blog;
