import { Typography, Box, Fade } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Box
			sx={{ marginTop: 'auto', marginBottom: 1 }}
			component='footer'
			textAlign='center'>
			<Fade in>
				<Typography variant='body2'>Created by Nikhil Lama.</Typography>
			</Fade>
		</Box>
	);
};

export default Footer;
