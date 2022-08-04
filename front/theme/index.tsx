import { createTheme } from '@mui/material/styles'

const themeConstants = {
	paper: '#F9F9F9',

	primary: {
		main: '#3f51b5',
		dark: '#000',
	},
	secondary: {
		main: '#f50057',
		dark: '#3A3A3A',
	},
	error: {
		main: '#b22222',
		dark: '#8b0000',
	},
	fg: { main: '#3f51b5', dark: 'rgba(55, 65, 81, 1)' },
	breakpoints: {
		xs: 0,
		mb: 350,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
}

// Check here for more configurations https://mui.com/material-ui/customization/theming/
const theme = createTheme({
	palette: {
		primary: themeConstants.primary,
		secondary: themeConstants.secondary,
		background: { paper: themeConstants.paper },
		text: {
			primary: themeConstants.fg.main,
			secondary: themeConstants.fg.dark,
		},
		error: themeConstants.error,
	},
	breakpoints: {
		values: themeConstants.breakpoints,
	},
})

export { theme }
