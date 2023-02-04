import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ReadMoreButtonStyle = styled(Button)(({ theme }) => ({
	borderBottom: '1px solid white',
}));

export const SeeAllPostButtonStyle = styled(Button)(({ theme }) => ({
	color: 'white',
	padding: 0,
	borderBottom: '1px solid white',
}));
