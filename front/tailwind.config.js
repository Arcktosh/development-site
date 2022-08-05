/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			// Generate colors: https://huewind.jordantwells.com
			colors: {
				theme: {
					light: '#f2f2e6',
					dark: '#07020a',
				},
				brainFreeze: {
					50: '#f8cffa',
					100: '#e5b4ff',
					200: '#887aff',
					300: '#4688ff',
					400: '#1cbdff',
					500: '#00efff',
					600: '#00e1dc',
					700: '#00b2b6',
					800: '#006b82',
					900: '#052c48',
				},
				amethystGanzstar: {
					50: '#facfd7',
					100: '#ffb4d0',
					200: '#ff7ad8',
					300: '#ff46ff',
					400: '#c61cff',
					500: '#8f00ff',
					600: '#6300e1',
					700: '#4400b6',
					800: '#2f0082',
					900: '#1f0548',
				},
				furiousRed: {
					50: '#faebcf',
					100: '#ffe1b4',
					200: '#ffba7a',
					300: '#ff8746',
					400: '#ff4c1c',
					500: '#ff1000',
					600: '#e10016',
					700: '#b60031',
					800: '#82003b',
					900: '#48052f',
				},
				brightGreen: {
					50: '#e4facf',
					100: '#d4ffb4',
					200: '#a6ff7a',
					300: '#7cff46',
					400: '#66ff1c',
					500: '#70ff00',
					600: '#8fe100',
					700: '#a7b600',
					800: '#826000',
					900: '#481b05',
				},
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}
