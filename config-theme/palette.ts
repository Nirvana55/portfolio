import { PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
	0: '#FFFFFF',
	100: '#f4f7f9',
	200: '#e2e8ee',
	300: '#dee6ed',
	400: '#ced4da',
	500: '#adb5bd',
	600: '#6c757d',
	700: '#495057',
	800: '#020202',
	900: '#212529',
	500_8: alpha('#919EAB', 0.08),
	500_12: alpha('#919EAB', 0.12),
	500_16: alpha('#919EAB', 0.16),
	500_24: alpha('#919EAB', 0.24),
	500_32: alpha('#919EAB', 0.32),
	500_48: alpha('#919EAB', 0.48),
	500_56: alpha('#919EAB', 0.56),
	500_80: alpha('#919EAB', 0.8),
};
const INVERTED_GREY = {
	0: '#212529',
	100: '#3e4555',
	200: '#545968',
	300: '#696e7b',
	400: '#7f838e',
	500: '#9498a1',
	600: '#a9acb3',
	700: '#bfc1c6',
	800: '#d4d6d9',
	900: '#eaeaec',
	500_8: alpha('#919EAB', 0.08),
	500_12: alpha('#919EAB', 0.12),
	500_16: alpha('#919EAB', 0.16),
	500_24: alpha('#919EAB', 0.24),
	500_32: alpha('#919EAB', 0.32),
	500_48: alpha('#919EAB', 0.48),
	500_56: alpha('#919EAB', 0.56),
	500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
	lighter: '#84aef2',
	light: '#366dc7',
	main: '#377DFF',
	dark: '#2e70d9',
	darker: '#293042',
	contrastText: '#6c757d',
};
// const PRIMARY_DARK = {
//   lighter: "#77788d",
//   light: "#366dc7",
//   main: "#3f80ea",
//   dark: "#293042",
//   darker: "#202634",
//   contrastText: "#adb5bd",
// };
const SECONDARY = {
	lighter: '#C8FACD',
	light: '#5BE584',
	main: '#f7f9fc',
	dark: '#31507D',
	darker: '#005249',
	contrastText: '#adb5bd',
};
// const SECONDARY_DARK = {
//   lighter: "#C8FACD",
//   light: "#5BE584",
//   main: "#202634",
//   dark: "#31507D",
//   darker: "#005249",
//   contrastText: "#adb5bd",
// };
const INFO = {
	lighter: '#D0F2FF',
	light: '#74CAFF',
	main: '#1890FF',
	dark: '#0C53B7',
	darker: '#04297A',
	contrastText: '#fff',
};
const SUCCESS = {
	lighter: '#E9FCD4',
	light: '#AAF27F',
	main: '#4bbf73',
	dark: '#229A16',
	darker: '#08660D',
	contrastText: GREY[800],
};
const WARNING = {
	lighter: '#FFF7CD',
	light: '#FFE16A',
	main: '#e5a54b',
	dark: '#B78103',
	darker: '#7A4F01',
	contrastText: GREY[800],
};

const DARKMODE_WARNING = {
	main: '#CC8B37',
	contrastText: GREY[800],
};

const ERROR = {
	lighter: '#FFE7D9',
	light: '#FFA48D',
	main: '#d9534f',
	dark: '#B72136',
	darker: '#7A0C2E',
	contrastText: '#fff',
};

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const getPalette = (mode: PaletteMode) => ({
	mode,
	...(mode === 'light'
		? {
				common: { black: '#000', white: '#fff' },
				primary: { ...PRIMARY },
				secondary: { ...SECONDARY },
				info: { ...INFO },
				success: { ...SUCCESS },
				warning: { ...WARNING },
				error: { ...ERROR },
				grey: GREY,
				gradients: GRADIENTS,
				chart: CHART_COLORS,
				divider: GREY[500_24],
				text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
				background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
				action: {
					active: GREY[600],
					hover: GREY[500_8],
					selected: GREY[500_16],
					disabled: GREY[500_80],
					disabledBackground: GREY[500_24],
					focus: GREY[500_24],
					hoverOpacity: 0.08,
					disabledOpacity: 0.48,
				},
		  }
		: {
				common: { black: '#000', white: '#fff' },
				primary: { ...PRIMARY },
				secondary: { ...SECONDARY },
				info: { ...INFO },
				success: { ...SUCCESS },
				warning: { ...DARKMODE_WARNING },
				error: { ...ERROR },
				grey: INVERTED_GREY,
				gradients: GRADIENTS,
				chart: CHART_COLORS,
				divider: INVERTED_GREY[500_24],
				text: {
					primary: '#ffff',
					secondary: INVERTED_GREY[600],
					disabled: INVERTED_GREY[500],
				},
				background: {
					paper: '#25282A',
					default: '#000',
					neutral: INVERTED_GREY[200],
				},
				action: {
					active: INVERTED_GREY[900],
					hover: INVERTED_GREY[500_8],
					selected: INVERTED_GREY[500_16],
					disabled: INVERTED_GREY[500_80],
					disabledBackground: INVERTED_GREY[500_24],
					focus: INVERTED_GREY[500_24],
					hoverOpacity: 0.08,
					disabledOpacity: 0.48,
				},
		  }),
});

export default getPalette;
