/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#64748b",
        success: "#16a34a",
        warning: "#f59e0b",
        danger: "#dc2626",

        background: "#f8fafc",
        surface: "#ffffff",
        border: "#e2e8f0",

        text: "#1e293b",
        "text-muted": "#64748b",
      },
    },
  },

  plugins: [],
}