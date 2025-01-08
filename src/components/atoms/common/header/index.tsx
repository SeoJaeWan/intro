'use client';
import { usePathname } from 'next/navigation';
import HeaderStyle from './header.style';
import Link from 'next/link';
import Image from 'next/image';
import { route } from './header.json';
import useAnimation from '@/store/animation';
import { HiOutlineMenu } from 'react-icons/hi';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fixedView, unfixedView } from '@/utils/fixedView';
import { media } from '@/style/theme';

const Header = () => {
  const { isRootAnimation } = useAnimation();
  const pathname = usePathname();
  const fixedViewRef = useRef<NodeJS.Timeout>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpen = useCallback(() => {
    fixedViewRef.current = setInterval(() => {
      fixedView();
    }, 500);
    setIsMenuOpen(true);
  }, []);

  const menuClose = useCallback(() => {
    clearInterval(fixedViewRef.current);
    unfixedView();
    setIsMenuOpen(false);
  }, []);

  const handleMenuButton = () => {
    if (isMenuOpen) {
      menuClose();
    } else {
      menuOpen();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = parseInt(media.mobile, 10);

      if (window.innerWidth > mobile) {
        menuClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(fixedViewRef.current);
    };
  }, [menuClose]);

  useEffect(() => {
    menuClose();
  }, [pathname, menuClose]);

  if (!isRootAnimation) {
    return null;
  }

  return (
    <HeaderStyle.Container>
      <HeaderStyle.Logo>
        <Link href={'/'} passHref>
          <Image
            src={'/assets/images/common/logo.png'}
            alt={'Never End, Ever Update'}
            width={526}
            height={300}
          />
        </Link>
      </HeaderStyle.Logo>

      <HeaderStyle.NavList>
        <ul>
          {route.map(({ name, path }) => (
            <li className={pathname === path ? 'active' : ''} key={path}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </HeaderStyle.NavList>

      <HeaderStyle.Button onClick={handleMenuButton}>
        <HiOutlineMenu />
      </HeaderStyle.Button>

      <HeaderStyle.MenuList $open={isMenuOpen}>
        <ul>
          {route.map(({ name, path }, idx) => (
            <HeaderStyle.MenuItem
              $open={isMenuOpen}
              $delay={(idx + 1) * 0.5}
              key={path}
            >
              <Link href={path}>{name}</Link>
            </HeaderStyle.MenuItem>
          ))}
        </ul>
      </HeaderStyle.MenuList>
    </HeaderStyle.Container>
  );
};

export default Header;
