/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			small: '450px',
			medium: '550px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			twoxl: '1536px',
		},
		extend: {
			colors: {
				my: {
					accent: '#00b485',
					accentHover: '#00d69e',
					btnDissable: '#c5fff0',
					textDisable: '#728cb0',
					dark: 'rgb(31 41 55)',
					bgDark: 'rgb(15 23 42)',
					light: 'rgb(226 232 240)',
				},
			},
			animation: {
				flip: 'flip 1s ease-in-out',
			},
			keyframes: {
				flip: {
					'0%': {
						transform: 'rotateY(0deg)',
					},
					'50%': {
						transform: 'rotateY(360deg)',
					},
					'100%': {
						transform: 'rotateY(0deg)',
					},
				},
			},
		},
	},
	plugins: [],
}
