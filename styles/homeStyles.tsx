import { Button } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

const waveHandAnimation = keyframes`
		"0%": {transform: rotate(0.04deg)}
		10% {transform: rotate(14.0deg)}
		20% {transform: rotate(-8.0deg)}
		30% {transform: rotate(14.0deg)}
		40% {transform: rotate(-4.0deg)}
		50% {transform: rotate(10.0deg)}
		60% {transform: rotate(0.0deg)}
		100% {transform: rotate(0.0deg)}
		`;
export const ReadMoreButtonStyle = styled(Button)(({ theme }) => ({
	borderBottom: '1px solid white',
}));

export const SeeAllPostButtonStyle = styled(Button)(({ theme }) => ({
	color: 'white',
	padding: 0,
	borderBottom: '1px solid white',
}));

export const WaveHandStyle = styled('span')(({ theme }) => ({
	display: 'inline-block',
	transformOrigin: `70% 70%`,
	animation: ` ${waveHandAnimation} 2.5s infinite ease`,
}));
