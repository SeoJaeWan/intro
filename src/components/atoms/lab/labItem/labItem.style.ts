import { ColorType } from '@/style/theme';
import styled, { css, keyframes } from 'styled-components';

const Title = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.color.backgroundShadow};

  font-size: 1.5vw;
  font-weight: 900;

  white-space: nowrap;

  opacity: 0;

  transition: all 0.5s 0.2s;
`;

const Box = styled.div`
  width: auto;
  height: 100%;

  aspect-ratio: 1/1;

  border: 4px solid ${(props) => props.theme.color.line};
  border-radius: 50%;
  overflow: hidden;

  transition: all 0.5s;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: auto;
    height: 100%;
  }
`;

const Block = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  width: auto;
  height: calc(100% - 8px);

  aspect-ratio: 1 /1;

  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s;

  cursor: not-allowed;
`;

const linAni = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const BlockLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  overflow: hidden;

  & > div {
    display: flex;
    justify-content: left;
    align-items: center;

    width: 100%;
    height: 100%;

    animation: ${linAni} 10s infinite linear;
  }
`;

interface BlockLineItemProps {
  $color: keyof ColorType;
}

const BlockLineItem = styled.div<BlockLineItemProps>`
  width: auto;
  height: 100%;

  aspect-ratio: 1/4;

  background-color: ${(props) => props.theme.color[props.$color]};
`;

const BlockText = styled.p`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.color.backgroundShadow};
  border-radius: 50%;

  font-size: 20px;
  font-weight: 800;
`;

interface ContainerProps {
  $isBlock: boolean;
  $index: number;
}

const LabItemAni = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.li<ContainerProps>`
  display: flex;
  justify-content: center;

  width: auto;
  height: 100%;

  aspect-ratio: 5/3;

  opacity: 0;
  animation: ${LabItemAni} 1.5s ${(props) => (props.$index + 1) * 0.5}s forwards;

  ${(props) =>
    props.$isBlock
      ? css`
          ${Block} {
            &:hover {
              opacity: 1;
            }
          }
        `
      : css`
          ${Box} {
            &:hover {
              border-radius: 15px;
              aspect-ratio: 5/3;

              ${Title} {
                opacity: 1;
              }
            }
          }
        `}
`;

const LabItemStyle = {
  Container,
  Box,
  Title,
  Block,
  BlockLine,
  BlockLineItem,
  BlockText,
};

export default LabItemStyle;
