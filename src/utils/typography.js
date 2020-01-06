import Typography from 'typography'

const typography = new Typography({
  title: 'Gatsby Strapi Demo',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '300',
        '400',
        '400i',
        '500',
        '700',
        '700i',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '500',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: [
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: 500,
  bodyFontFamily: [
    'Open Sans',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
})

export const { scale, rhythm, options } = typography

export default typography
