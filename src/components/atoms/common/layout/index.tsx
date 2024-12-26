'use client';
import { PropsWithChildren } from 'react';
import LayoutStyle from './layout.style';
import { Star } from './star.json';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <LayoutStyle.Container>
      {children}
      {Star.map(({ top, left, delay }, idx) => (
        <LayoutStyle.Star $top={top} $left={left} $delay={delay} key={idx} />
      ))}
    </LayoutStyle.Container>
  );
};

export default Layout;
