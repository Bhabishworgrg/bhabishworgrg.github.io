/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#3B1C32', // Background color
				secondary: '#7F5AF0', // Secondary color (hover effects)
				tertiary: '#BFBFDE', // Text color
				highlight: '#7F5AF0', // Secondary color (hover effects)
			},
		},
	},
	plugins: [],
}
