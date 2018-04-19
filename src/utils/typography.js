import Typography from "typography";

const typography = new Typography({
    googleFonts: [
        {
            name: 'Josefin Sans',
            styles: [
                '300',
                '400',
            ],
        },
    ],
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Josefin Sans', 'sans-serif'],
    headerWeight: 300,
    bodyFontFamily: ['Josefin Sans', 'serif'],
});

export default typography;