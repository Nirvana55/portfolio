import { Box, Fade, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import WorkInProgressImage from '../../public/work_in_progress.svg';

const WorkInProgress = () => {
	return (
		<Fade in>
			<Box sx={{ pl: '2.5rem', pr: '2.5rem', textAlign: 'center', mt: 2 }}>
				<Image
					height={300}
					width={300}
					alt='work_in_progress'
					src={WorkInProgressImage}
				/>
				<Typography variant='h5' fontWeight='semi-bold'>
					Sorry, Work In Progress.
				</Typography>
			</Box>
		</Fade>
	);
};

export default WorkInProgress;
