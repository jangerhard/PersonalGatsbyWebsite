import Typography from "typography";

const typography = new Typography({
    googleFonts: [
        {
            name: 'Josefin Sans',
            styles: [
                '400',
            ],
        },
    ],
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Josefin Sans', 'sans-serif'],
    bodyFontFamily: ['Josefin Sans', 'serif'],

});

export default typography;