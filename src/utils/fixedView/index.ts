export const fixedView = () => {
  const htmlEl = document.querySelector('html');

  htmlEl?.classList.add('fixed');
};

export const unfixedView = () => {
  const htmlEl = document.querySelector('html');

  htmlEl?.classList.remove('fixed');
};
