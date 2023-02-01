import { Box, Typography } from '@mui/material';
import React from 'react';
import Blog from '../components/Blog';

const BlogContainer = () => {
	return (
		<Box>
			<Typography marginTop={5} variant='h4' fontWeight='bold'>
				Blogs
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Blog />
			</Box>
		</Box>
	);
};

export default BlogContainer;
