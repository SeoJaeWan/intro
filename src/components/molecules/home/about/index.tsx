'use client';
import Information from '@/components/atoms/common/information';
import AboutStyle from './about.style';
import AboutContent from '@/components/atoms/home/aboutContent';

const About = () => {
  return (
    <AboutStyle.Container>
      <AboutStyle.Title>
        <Information>About SEOJAEWAN</Information>
      </AboutStyle.Title>

      <AboutContent />
    </AboutStyle.Container>
  );
};

export default About;
