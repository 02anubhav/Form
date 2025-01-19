/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6',
        },
        green: {
          500: '#10b981',
        },
        purple: {
          500: '#8b5cf6',
        },
        orange: {
          500: '#f97316',
        },
        cyan: {
          500: '#06b6d4',
        },
      },
      fontSize: {
        sm: ['0.875rem', '1.25rem'], // Small
        base: ['1rem', '1.5rem'], // Base
        lg: ['1.125rem', '1.75rem'], // Large
        xl: ['1.25rem', '1.75rem'], // Extra Large
        '2xl': ['1.5rem', '2rem'], // 2 Extra Large
        '3xl': ['1.875rem', '2.25rem'], // 3 Extra Large
      },
      spacing: {
        18: '4.5rem', // Custom spacing for better alignment
      },
      screens: {
        xs: '480px', // Custom breakpoint for small screens
        sm: '640px', // Small devices
        md: '768px', // Medium devices
        lg: '1024px', // Large devices
        xl: '1280px', // Extra-large devices
        '2xl': '1536px', // 2 Extra-large devices
      },
    },
  },
  plugins: [],
};
