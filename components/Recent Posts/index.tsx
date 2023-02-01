import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { SeeAllPostButtonStyle } from './style';
import Blog from '../Blog';

const RecentPost = () => {
	return (
		<Box sx={{ mt: 10 }}>
			<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
				Recent Posts
			</Typography>
			<Box sx={{ mt: 4 }}>
				<Blog />
			</Box>
			<Box sx={{ float: 'right', mt: 3, mb: 3 }}>
				<SeeAllPostButtonStyle>
					See All Posts <ArrowRightAltIcon sx={{ pl: 1 }} />
				</SeeAllPostButtonStyle>
			</Box>
		</Box>
	);
};

export default RecentPost;
