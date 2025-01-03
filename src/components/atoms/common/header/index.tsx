'use client';
import { usePathname } from 'next/navigation';
import HeaderStyle from './header.style';
import Link from 'next/link';
import Image from 'next/image';
import { route } from './header.json';
import useAnimation from '@/store/animation';

const Header = () => {
  const { isRootAnimation } = useAnimation();
  const pathname = usePathname();

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

      <nav>
        <HeaderStyle.NavList>
          {route.map(({ name, path }) => (
            <li className={pathname === path ? 'active' : ''} key={path}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </HeaderStyle.NavList>
      </nav>
    </HeaderStyle.Container>
  );
};

export default Header;
