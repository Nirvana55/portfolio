import { Box, Fade, Grid, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Blog from '../components/Blog';
import { BlogsData } from '../types/blogData';
import { getAllPosts } from '../utils/md';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import WorkInProgress from '../components/WorkInProgress';

interface BlogContainer {
	posts: BlogsData[];
}

const BlogContainer = ({ posts }: BlogContainer) => {
	const theme = useTheme();
	const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<Head>
				<title>N | Blogs</title>
			</Head>
			<Box sx={{ mb: 4 }}>
				<Fade in>
					<Typography marginTop={5} variant='h4' fontWeight='bold'>
						Blogs
					</Typography>
				</Fade>

				<Box sx={{ mt: 3 }}>
					{posts.filter((item) => item.frontMatter.isPublished).length > 0 ? (
						<Grid
							container
							justifyContent={mobileScreen ? 'center' : ''}
							spacing={2}
							columns={{ xs: 2, sm: 8, md: 12 }}>
							{posts
								.sort(
									(a, b) =>
										new Date(b.frontMatter.date).valueOf() -
										new Date(a.frontMatter.date).valueOf()
								)
								.map((posts) => (
									<Grid item xs={3.5} sm={4} md={4} key={posts.slug}>
										<Blog blogs={posts} />
									</Grid>
								))}
						</Grid>
					) : (
						<>
							<WorkInProgress />
						</>
					)}
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
