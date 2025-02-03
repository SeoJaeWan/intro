import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  justify-content: center;

  width: auto;
  height: 100%;

  aspect-ratio: 5/3;
`;

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

  &:hover {
    border-radius: 15px;
    aspect-ratio: 5/3;

    ${Title} {
      opacity: 1;
    }
  }
`;

const LabItemStyle = { Container, Box, Title };

export default LabItemStyle;
