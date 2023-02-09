import { Box, Fade, Grid, Typography } from '@mui/material';
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
					<Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 12 }}>
						{posts
							.sort(
								(a, b) =>
									new Date(b.frontmatter.date).getTime() -
									new Date(a.frontmatter.date).getTime()
							)
							.map((posts) => (
								<Grid item xs={3.5} sm={4} md={4} key={posts.slug}>
									<Blog blogs={posts} />
								</Grid>
							))}
					</Grid>
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
