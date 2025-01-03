import styled, { css, keyframes } from 'styled-components';

const headerShow = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 10px 40px 5px;
  background-color: ${(props) => props.theme.color.background};

  opacity: 0;

  animation: ${headerShow} 1s forwards;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleY(0.5);

    display: block;

    width: calc(100% - 80px);
    height: 1px;

    background-color: ${(props) => props.theme.color.line};
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    padding: 10px 10px 5px;

    &::before {
      display: none;
    }
  }
`;

const Logo = styled.h1`
  position: relative;
  z-index: 2;

  img {
    width: 90px;
    height: auto;

    aspect-ratio: 526 / 300;

    @media (max-width: ${(props) => props.theme.media.mobile}) {
      width: 60px;
    }
  }
`;

const NavList = styled.nav`
  font-size: ${(props) => props.theme.font(20)};
  font-weight: 500;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  li {
    cursor: pointer;

    opacity: 0.5;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  li.active {
    opacity: 1;
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    display: none;
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 2;

  display: none;

  font-size: ${(props) => props.theme.font(24)};
  margin-right: 5px;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    display: block;
  }
`;

interface MenuListProps {
  $open: boolean;
}

const showMenu = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuList = styled.nav<MenuListProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100vh;

  transform: translateX(${(props) => (props.$open ? '0' : '100%')});
  transition: transform 0.3s;

  background-color: ${(props) => props.theme.color.menu};

  font-size: 10vw;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    width: 100%;
    height: 100%;
  }
`;

interface MenuItemProps {
  $delay: number;
  $open: boolean;
}

const MenuItem = styled.li<MenuItemProps>`
  opacity: 0;

  ${(props) =>
    props.$open &&
    css`
      animation: ${showMenu} 0.5s ${props.$delay}s forwards;
    `}
`;

const HeaderStyle = {
  Container,
  Logo,
  NavList,
  Button,
  MenuList,
  MenuItem,
};

export default HeaderStyle;
