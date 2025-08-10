/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--color-background) / <alpha-value>)",
                text: "hsl(var(--color-text) / <alpha-value>)",
                primary: "hsl(var(--color-primary) / <alpha-value>)",
                "accent-main": "hsl(var(--color-accent-main) / <alpha-value>)",
                "accent-secondary":
                    "hsl(var(--color-accent-secondary) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
