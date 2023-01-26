import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Blog = () => {
	return (
		<Box sx={{ mt: 10 }}>
			<Typography variant='h4' fontWeight='bold'>
				Recent Posts
			</Typography>
			<Box sx={{ mt: 4 }}>
				<Card sx={{ maxWidth: 300 }}>
					<CardMedia sx={{ height: 180 }} image='../../public/nirvana.jpg' />
					<CardContent>
						<Typography>First Blog</Typography>
					</CardContent>
					<CardActions>
						<Button>R</Button>
					</CardActions>
				</Card>
			</Box>
		</Box>
	);
};

export default Blog;
