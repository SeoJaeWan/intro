'use client';
import { PropsWithChildren, useEffect } from 'react';
import LayoutStyle from './layout.style';
import { route, star } from './layout.json';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useAnimation from '@/store/animation';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  const pathname = usePathname();
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
      <LayoutStyle.Header>
        <LayoutStyle.Logo>
          <Link href={'/'} passHref>
            <Image
              src={'/assets/images/common/logo.png'}
              alt={'Never End, Ever Update'}
              width={526}
              height={300}
            />
          </Link>
        </LayoutStyle.Logo>

        <nav>
          <LayoutStyle.NavList>
            {route.map(({ name, path }) => (
              <li className={pathname === path ? 'active' : ''} key={path}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </LayoutStyle.NavList>
        </nav>
      </LayoutStyle.Header>

      {children}
      {star.map(({ top, left, delay }, idx) => (
        <LayoutStyle.Star $top={top} $left={left} $delay={delay} key={idx} />
      ))}
    </LayoutStyle.Container>
  );
};

export default Layout;
