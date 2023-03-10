import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LayoutContainerStyle = styled(Box)(({ theme }) => ({
	width: '62rem',
	margin: '0 auto',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	[theme.breakpoints.down('md')]: {
		width: '80%',
	},
	[theme.breakpoints.down('sm')]: {
		width: '90%',
	},
}));
