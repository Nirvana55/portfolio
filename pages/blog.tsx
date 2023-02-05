import { Box, Fade, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Blog from '../components/Blog';
import { BlogsData } from '../types/blogData';
import { getAllPosts } from '../utils/md';

interface BlogContainer {
	posts: BlogsData[];
}

const BlogContainer = ({ posts }: BlogContainer) => {
	return (
		<>
			<Head>
				<title>N | Blogs</title>
			</Head>
			<Box sx={{ mb: 4 }}>
				<Fade in={true}>
					<Typography marginTop={5} variant='h4' fontWeight='bold'>
						Blogs
					</Typography>
				</Fade>

				<Box sx={{ mt: 3 }}>
					<Blog blogs={posts} />
				</Box>
			</Box>
		</>
	);
};

export default BlogContainer;

export const getStaticProps: GetStaticProps<BlogContainer> = async () => {
	const posts = getAllPosts();

	return {
		props: {
			posts: posts,
		},
	};
};
