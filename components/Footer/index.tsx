import { Typography, Box } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Box
			sx={{ marginTop: 'auto', marginBottom: 1 }}
			component='footer'
			textAlign='center'>
			<Typography variant='body2'>Created by Nikhil Lama.</Typography>
		</Box>
	);
};

export default Footer;
