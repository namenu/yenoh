module.exports = {
  content: process.env.NODE_ENV == 'production' ? ["./public/js/main.js"] : ["./public/js/cljs-runtime/*.js"],
  theme: {
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}