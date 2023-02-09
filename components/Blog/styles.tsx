import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ImageContainerStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '200px',
}));

export const CardContainer = styled(Card)(({ theme }) => ({
	boxShadow: '0px 0px 5px 1px #DC143C	',
}));
