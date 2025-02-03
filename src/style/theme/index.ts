export const color = {
  background: '#0e100f',
  text: '#f9f5ea',
  backgroundText: '#44d62c',
  star: '#eccc68',

  line: '#f9f5ea',

  box1: '#eb2f06',
  box2: '#fa8231',
  box3: '#FF6EC7',
  box4: '#00BFFF',
  box5: '#39FF14',

  boxShadow: 'rgba(0, 0, 0, 0.2)',
  backgroundShadow: 'rgba(0,0,0,0.8)',

  black: '#0e100f',
  white: '#ffffff',
  gray: '#A0A0A0',
  red: '#eb2f06',

  menu: '#1c1f1d',
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
