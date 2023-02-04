import { Box, Typography } from '@mui/material';
import React from 'react';
import Blog from '../components/Blog';
import { BlogsData } from '../types/blogData';
import { getAllPosts } from '../utils/md';

interface BlogContainer {
	posts: BlogsData[];
}

const BlogContainer = ({ posts }: BlogContainer) => {
	return (
		<Box sx={{ mb: 4 }}>
			<Typography marginTop={5} variant='h4' fontWeight='bold'>
				Blogs
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Blog blogs={posts} />
			</Box>
		</Box>
	);
};

export default BlogContainer;

export const getStaticProps = async () => {
	const posts = getAllPosts();

	return {
		props: {
			posts: posts,
		},
	};
};
