export const color = {};

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
