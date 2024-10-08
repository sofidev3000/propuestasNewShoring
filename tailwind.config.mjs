/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

		  fontFamily: {
			'vremena': ['VremenaGrotesk', 'sans-serif'],
			'vremena-bold': ['VremenaGroteskBold', 'sans-serif'],
			'FjallaOne': ['FjallaOne-Regular', 'sans-serif'],
			'SourceSansPro': ['Source Sans Pro', 'sans-serif'],
			'montserrat': ['Montserrat Variable', 'sans-serif'],
			'NunitoSans': [ 'Nunito Sans Variable', 'sans-serif'],
			'Nunito': [ 'Nunito Variable', 'sans-serif'],
			'Poppins': [ 'Poppins', 'sans-serif'],
			'WorkSans': [  'Work Sans Variable', 'sans-serif'],
			'Merriweather': [  'Merriweather', 'serif'],

		  },
		  colors: {
			"guardsman-red": {
			  50: "#ffefef",
			  100: "#ffdcdc",
			  200: "#ffbfbf",
			  300: "#ff9292",
			  400: "#8F0101",
			  500: "#8F0101",
			  600: "#8F0101",
			  700: "#8F0101",
			  800: "#8F0101",
			  900: "#8F0101",
			  950: "#8F0101",
			},
		  },
		},
	  },
	plugins: [],
}
