'use client';
import { usePathname } from 'next/navigation';
import HeaderStyle from './header.style';
import Link from 'next/link';
import Image from 'next/image';
import data from './header.json';
import useAnimation from '@/store/animation';
import { HiOutlineMenu } from 'react-icons/hi';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fixedView, unfixedView } from '@/utils/fixedView';
import { media } from '@/style/theme';

const { route } = data;

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

  const handleNewTab = () => {
    const newWindow = window.open('http://192.168.0.72:3000', '_blank');

    if (newWindow) {
      // 새 창이 로드될 때 메시지를 보냄
      const sendMessage = () => {
        newWindow.postMessage({ text: 'hello' }, '*');
      };

      newWindow.onload = sendMessage; // 창이 완전히 로드된 후 메시지 전송
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
            priority
          />
        </Link>
      </HeaderStyle.Logo>

      <button onClick={handleNewTab}>test</button>

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
