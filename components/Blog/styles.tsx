import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ImageContainerStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '180px',
}));

export const CardContainer = styled(Card)(({ theme }) => ({
	boxShadow: '1px 1px 10px 0px #DC143C	',
	height: '100%',
}));
