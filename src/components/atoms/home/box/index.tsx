import { PropsWithChildren } from 'react';
import BoxStyle from './box.style';
import { ColorType } from '@/style/theme';

interface BoxProps extends PropsWithChildren {
  color: keyof ColorType;
}

const Box = (props: BoxProps) => {
  const { children, color } = props;

  return (
    <BoxStyle.Container>
      <BoxStyle.Content $color={color}>{children}</BoxStyle.Content>
      <BoxStyle.BoxShadow />
    </BoxStyle.Container>
  );
};

export default Box;
