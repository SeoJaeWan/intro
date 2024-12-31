export const color = {
  background: '#0e100f',
  text: '#f9f5ea',
  backgroundText: '#44d62c',
  star: '#eccc68',

  line: '#f9f5ea',

  box1: '#eb2f06',
  box2: '#fa8231',
  box3: '#f78fb3',
  box4: '#3dc1d3',
  box5: '#2ed573',

  boxShadow: 'rgba(0, 0, 0, 0.2)',

  black: '#0e100f',
  white: '#ffffff',
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
