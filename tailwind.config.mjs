// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C2029',
        indigo: {
          DEFAULT: '#1F3A63',
          deep: '#142A49',
        },
        paper: '#F5F3EC',
        vermillion: '#D2472A',
        'vermillion-dark': '#B93B21', // untuk hover state tombol primer
        gold: '#E3A93F',
        mist: '#DEDDD3',
        success: '#3E7A57',
      },
      fontFamily: {
        // Display: Source Serif 4 (judul, seperti dokumen resmi)
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        // Body: IBM Plex Sans (UI & paragraf)
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        // Aksara Jepang (JFT, mensetsu, nama kota)
        jp: ['"IBM Plex Sans JP"', '"IBM Plex Sans"', 'sans-serif'],
      },
      fontSize: {
        // Skala sesuai 02-design-system.md (rasio ~1.25, dasar 16px)
        'display-xl': ['56px', { lineHeight: '1.05', fontWeight: '600' }],
        'display-l': ['40px', { lineHeight: '1.1', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.2', fontWeight: '500' }],
        'body-l': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        // Radius custom (bukan pill 999px generik)
        DEFAULT: '8px',
        card: '12px',
      },
      maxWidth: {
        prose: '68ch', // batas lebar baris paragraf panjang
      },
      transitionDuration: {
        DEFAULT: '150ms',
        modal: '200ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 400ms ease-out both',
        'scale-in': 'scale-in 200ms ease-out both',
      },
    },
  },
  plugins: [],
};