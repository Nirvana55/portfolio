import { PaletteMode } from '@mui/material';
import getPalette from './palette';
import getTypography from './typography';

const getTheme = (mode: PaletteMode) => ({
	palette: getPalette(mode),
	typography: getTypography(mode),
});

export default getTheme;
