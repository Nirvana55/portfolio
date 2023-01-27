import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Blog = () => {
	return (
		<Box sx={{ mt: 10 }}>
			<Typography sx={{ fontSize: 35 }} fontWeight='bold'>
				Recent Posts
			</Typography>
			<Box sx={{ mt: 4 }}>
				<Grid container spacing={2}>
					<Grid item md={4}>
						<Card sx={{ maxWidth: 260 }}>
							<CardMedia
								sx={{ height: 180 }}
								image='../../public/nirvana.jpg'
							/>
							<CardContent>
								<Typography>First Blog</Typography>
							</CardContent>
							<CardActions>
								<Button>Read</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Blog;
