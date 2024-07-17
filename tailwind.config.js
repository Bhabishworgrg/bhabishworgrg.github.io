/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bgColor: '#1E1E2E', // Background color
				priColor: '#EAEAEA', // Text color
				secColor: '#7F5AF0', // Secondary color (hover effects)
			},
		},
	},
	plugins: [],
}
