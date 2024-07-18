/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#1E1E2E', // Background color
				secondary: '#7F5AF0', // Secondary color (hover effects)
				tertiary: '#EAEAEA', // Text color
				highlight: '#7F5AF0', // Secondary color (hover effects)
			},
		},
	},
	plugins: [],
}
