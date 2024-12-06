/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*",
    "index.html"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'profile-grid': '40px 190px',
      },
      gridTemplateRows: {
        'chat-grid': '48px 510px 48px'
      },
      borderWidth: {
        'sidebar-width' : '1.8px'
      },
      fontSize: {
        'xxs' : '10px'            
      }
    },
  },
  plugins: [],
};
