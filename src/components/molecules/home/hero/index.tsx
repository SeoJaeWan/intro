'use client';

import Title from '@/components/atoms/home/title';
import HeroStyle from './hero.style';
import Information from '@/components/atoms/common/information';

const Hero = () => {
  return (
    <HeroStyle.Container>
      <Title />

      <HeroStyle.Info>
        <Information delay={4}>
          SEOJAEWAN - 업데이트 되는 프론트엔드 개발자
        </Information>
      </HeroStyle.Info>
    </HeroStyle.Container>
  );
};

export default Hero;
