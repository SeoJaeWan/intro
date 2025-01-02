'use client';
import { PropsWithChildren, useEffect } from 'react';
import LayoutStyle from './layout.style';
import { star } from './star.json';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayoutStyle.Container>
      {children}
      {star.map(({ top, left, delay }, idx) => (
        <LayoutStyle.Star $top={top} $left={left} $delay={delay} key={idx} />
      ))}
    </LayoutStyle.Container>
  );
};

export default Layout;
