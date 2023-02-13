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
	blogs: BlogsData;
}

const Blog = ({ blogs }: BlogPosts) => {
	const { slug, frontmatter } = blogs;
	return (
		<Fade in>
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
						{frontmatter.title.toUpperCase()}
					</Typography>
					<Typography variant='caption'>{frontmatter.description}</Typography>
				</CardContent>
				<CardActions sx={{ float: 'right', marginBottom: 0.3 }}>
					<Link href={`blog/${slug}`}>
						<Button sx={{ color: 'white' }} size='small'>
							Read More
						</Button>
					</Link>
				</CardActions>
			</CardContainer>
		</Fade>
	);
};

export default Blog;
