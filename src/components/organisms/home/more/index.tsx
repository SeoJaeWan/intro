'use client';
import { useEffect, useRef } from 'react';
import MoreStyle from './more.style';
import Percent from '@/utils/percent';
import Growth from '@/components/molecules/home/more/growth';
import Community from '@/components/molecules/home/more/community';

const More = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && layoutRef.current) {
        const scroll = scrollRef.current;
        const layout = layoutRef.current;

        const contentWidth = layout.getBoundingClientRect().width;

        const { bottom, height } = scroll.getBoundingClientRect();

        scroll.style.height = `${contentWidth / 2}px`;

        const max = height;
        const min = window.innerHeight;
        const viewWidth = window.innerWidth;

        const percent = Math.max(0, Math.min(100, Percent(max, min, bottom)));
        const translateX = Math.max(
          0,
          Math.min(contentWidth, contentWidth * (percent / 100) - viewWidth),
        );

        layout.style.transform = `translateX(calc(-${translateX}px))`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MoreStyle.Container ref={scrollRef}>
      <h2 className="a11y">More SEOJAEWAN</h2>

      <MoreStyle.Box>
        <MoreStyle.Layout ref={layoutRef}>
          <MoreStyle.Article>
            <Growth />
          </MoreStyle.Article>

          <MoreStyle.Article>
            <Community />
          </MoreStyle.Article>
        </MoreStyle.Layout>
      </MoreStyle.Box>
    </MoreStyle.Container>
  );
};

export default More;
