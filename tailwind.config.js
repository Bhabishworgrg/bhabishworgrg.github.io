/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': '#3B1C32', // Background color
				'secondary': '#1A1A1A', // Secondary color (hover effects)
				'tertiary': '#BFBFDE', // Text color
				'highlight': '#E07A5F', // Secondary color (hover effects)
			},
			listStyleType: {
				square: 'square',
			},
		},
	},
	plugins: [],
}
