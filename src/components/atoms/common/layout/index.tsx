'use client';
import { PropsWithChildren, useEffect } from 'react';
import LayoutStyle from './layout.style';
import { star } from './star.json';
import Image from 'next/image';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayoutStyle.Container>
      <LayoutStyle.Header>
        <LayoutStyle.Logo>
          <Image
            src={'/assets/images/common/logo.png'}
            alt={'Never End, Ever Update'}
            width={526}
            height={296}
          />
        </LayoutStyle.Logo>
      </LayoutStyle.Header>

      {children}
      {star.map(({ top, left, delay }, idx) => (
        <LayoutStyle.Star $top={top} $left={left} $delay={delay} key={idx} />
      ))}
    </LayoutStyle.Container>
  );
};

export default Layout;
