'use client';
import { PropsWithChildren, useEffect } from 'react';
import LayoutStyle from './layout.style';
import { star } from './layout.json';
import useAnimation from '@/store/animation';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  const { setIsRootAnimation } = useAnimation();

  useEffect(() => {
    const maxDelay = star.reduce((acc, cur) => Math.max(acc, cur.delay), 0);

    setTimeout(() => {
      setIsRootAnimation(true);
    }, maxDelay * 1000);

    window.scrollTo(0, 0);
  }, [setIsRootAnimation]);

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
