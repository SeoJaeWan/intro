import styled, { keyframes } from 'styled-components';

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
`;

const Logo = styled.h1`
  img {
    width: 90px;
    height: auto;

    aspect-ratio: 526 / 300;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  font-size: ${(props) => props.theme.font(20)};
  font-weight: 500;

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
`;

const HeaderStyle = {
  Container,
  Logo,
  NavList,
};

export default HeaderStyle;
