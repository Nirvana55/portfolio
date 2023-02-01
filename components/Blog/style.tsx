import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SeeAllPostButtonStyle = styled(Button)(({ theme }) => ({
	color: 'white',
	padding: 0,
	borderBottom: '1px solid white',
}));

export const ImageContainerStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '200px',
}));
