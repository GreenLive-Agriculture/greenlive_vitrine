/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#92C929",
                "secondary": "#F6F9FF",
                "nav": "#779341"
            },
        },
        fontFamily: {
          Montserrat: ['Montserrat', 'sans-serif'],
          WorkSans: ['Work_Sans', 'sans-serif']
        }
    },
    plugins: [],
};
