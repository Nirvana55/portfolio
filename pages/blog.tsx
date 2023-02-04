import { Box, Typography } from '@mui/material';
import React from 'react';
import Blog from '../components/Blog';

interface BlogContainer {
	posts: [];
}

const BlogContainer = ({ posts }: BlogContainer) => {
	return (
		<Box>
			<Typography marginTop={5} variant='h4' fontWeight='bold'>
				Blogs
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Blog blog={posts} />
			</Box>
		</Box>
	);
};

export default BlogContainer;
