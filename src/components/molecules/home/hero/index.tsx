'use client';

import Title from '@/components/atoms/home/title';
import HeroStyle from './hero.style';

const Hero = () => {
  return (
    <HeroStyle.Container>
      <Title />

      {/* <p>서재완 - 프론트엔드 개발자</p> */}
    </HeroStyle.Container>
  );
};

export default Hero;
