/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js"
      ],
      plugins: [
        // other plugins...
        require("flowbite/plugin")
      ],
      theme: {},
    };
