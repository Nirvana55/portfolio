import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import WorkInProgress from '../public/work_in_progress.svg';

const Blog = () => {
	return (
		<Box sx={{ pl: '2.5rem', pr: '2.5rem', textAlign: 'center', mt: 14 }}>
			<Image
				height={300}
				width={300}
				alt='work_in_progress'
				src={WorkInProgress}
			/>
			<Typography variant='h5' fontWeight='semi-bold'>
				Work In Progress
			</Typography>
		</Box>
	);
};

export default Blog;
