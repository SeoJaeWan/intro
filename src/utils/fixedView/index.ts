import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const fixedView = () => {
  const htmlEl = document.querySelector('html');

  disableBodyScroll(htmlEl as HTMLElement);
};

export const unfixedView = () => {
  const htmlEl = document.querySelector('html');

  enableBodyScroll(htmlEl as HTMLElement);
};
