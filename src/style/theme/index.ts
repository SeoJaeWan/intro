export const color = {
  background: '#0e100f',
  text: '#f9f5ea',
  backgroundText: '#44d62c',
  star: '#eccc68',

  line: '#f9f5ea',
};

export const media = {
  mobile: '767px',
  tablet: '1120px',
  notebook: '1680px',
};

export const font = (px: number) => {
  return `${px / 16}rem`;
};

export type ColorType = typeof color;
export type MediaType = typeof media;
export type FontType = typeof font;
