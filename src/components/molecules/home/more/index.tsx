'use client';
import { useEffect, useRef } from 'react';
import MoreStyle from './more.style';
import Percent from '@/utils/percent';

const More = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && layoutRef.current) {
        const scroll = scrollRef.current;
        const layout = layoutRef.current;

        const { bottom, height } = scroll.getBoundingClientRect();

        const max = height;
        const min = window.innerHeight;

        const percent = Math.max(0, Math.min(100, Percent(max, min, bottom)));
        const translateX = Math.max(0, Math.min(200, 2 * percent));

        layout.style.transform = `translateX(-${translateX}vw)`;
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
            <h3>Skill</h3>

            <p>
              낯선 기능에 설렘을 가지며 React와 Next.js 환경에서 즐거운 개발을
              하고 있습니다. <br />
              개발자가 편환 환경에서 개발을 할 수 있을지 즐거운 고민을 하고
              있습니다.
            </p>
          </MoreStyle.Article>

          <MoreStyle.Article>
            <h3>Communication</h3>

            <p>
              좋은 서비스를 완성하기 위해서는 팀원과의 소통과 협업이 중요하다고
              생각해요. 혼자 앞서나가는 것이 아닌 전체의 전투력 상승에 관심이
              많습니다.
            </p>
          </MoreStyle.Article>

          <MoreStyle.Article>
            <h3>Job</h3>

            <p>
              개발 말고도 해외(일본)여행, 평생을 함께할 취미를 찾기 위해서
              즐거운 여정을 하고 있습니다.
            </p>
          </MoreStyle.Article>
        </MoreStyle.Layout>
      </MoreStyle.Box>
    </MoreStyle.Container>
  );
};

export default More;
