/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-delay': 'fadeIn 0.6s ease-out 0.2s forwards',
                'logo-appear': 'logoAppear 1s ease-out forwards',
                'slide-in': 'slideIn 0.5s backwards',
                'marquee': 'marquee 20s linear infinite',
                'loading': 'loading 1.5s infinite',
                'shimmer': 'shimmer 2s infinite linear'
            },
            keyframes: {
                fadeIn: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                logoAppear: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px) scale(0.9)'
                    },
                    '50%': {
                        transform: 'translateY(10px) scale(1.1)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    }
                },
                slideIn: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                loading: {
                    '0%': { 'background-position': '200% 0' },
                    '100%': { 'background-position': '-200% 0' }
                },
                shimmer: {
                    '0%': { 'background-position': '-1000px 0' },
                    '100%': { 'background-position': '1000px 0' }
                }
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms'
            },
            transitionTimingFunction: {
                'custom': 'cubic-bezier(0.4, 0, 0.2, 1)'
            },
            backgroundSize: {
                'auto-100': 'auto 100%',
                '200-100': '200% 100%',
                '2000-100': '2000px 100%'
            }
        },
    },
    plugins: [],
}