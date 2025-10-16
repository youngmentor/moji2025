/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "max-width": "none",
            color: "#374151",
            '[class~="lead"]': {
              color: "#6b7280",
            },
            a: {
              color: "#f43f5e",
              textDecoration: "none",
              fontWeight: "500",
            },
            strong: {
              color: "#111827",
              fontWeight: "600",
            },
            "ol > li::before": {
              color: "#6b7280",
            },
            "ul > li::before": {
              backgroundColor: "#f43f5e",
            },
            hr: {
              borderColor: "#e5e7eb",
            },
            blockquote: {
              color: "#111827",
              borderLeftColor: "#f43f5e",
            },
            h1: {
              color: "#111827",
            },
            h2: {
              color: "#111827",
            },
            h3: {
              color: "#111827",
            },
            h4: {
              color: "#111827",
            },
            "figure figcaption": {
              color: "#6b7280",
            },
            code: {
              color: "#111827",
            },
            "a code": {
              color: "#111827",
            },
            pre: {
              color: "#e5e7eb",
              backgroundColor: "#1f2937",
            },
            thead: {
              color: "#111827",
              borderBottomColor: "#d1d5db",
            },
            "tbody tr": {
              borderBottomColor: "#e5e7eb",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
