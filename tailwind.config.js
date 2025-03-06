/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			height: {
				106: "26.5rem"
			},
			maxHeight: {
        106: "26.5rem",
      },
		},
  },
  plugins: [],
}

