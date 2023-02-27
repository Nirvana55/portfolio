import {
	Box,
	Button,
	CardActions,
	CardContent,
	Fade,
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
	const { slug, frontMatter } = blogs;
	return (
		<Link href={`blog/${slug}`} legacyBehavior>
			<a>
				<Fade in>
					<CardContainer sx={{ cursor: 'pointer' }}>
						<ImageContainerStyle>
							<Image
								alt='Image Alt'
								src={Nirvana}
								layout='fill'
								objectFit='cover'
								className='image-card'
							/>
						</ImageContainerStyle>
						<CardContent sx={{ height: '120px' }}>
							<Typography variant='body1' fontWeight='bold'>
								{frontMatter.title.toUpperCase()}
							</Typography>
							<Typography variant='caption'>
								{frontMatter.description}
							</Typography>
						</CardContent>
						<CardActions sx={{ float: 'right', marginBottom: 0.3 }}>
							<Button sx={{ color: 'white' }} size='small'>
								Read More
							</Button>
						</CardActions>
					</CardContainer>
				</Fade>
			</a>
		</Link>
	);
};

export default Blog;
