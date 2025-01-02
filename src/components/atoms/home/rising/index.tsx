import { PropsWithChildren } from 'react';
import RisingStyle from './rising.style';
import useObserver from '@/hooks/useObserver';

const Rising = (props: PropsWithChildren) => {
  const { children } = props;
  const svgRef = useObserver<SVGSVGElement>({ threshold: 1 });

  return (
    <RisingStyle.Container>
      <RisingStyle.Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 469.09 379.01"
        ref={svgRef}
      >
        <defs>
          <mask id="risingMask">
            <polyline
              className="cls-1"
              points="43.77 344.08 218.41 125.23 285.77 214.23 424.77 34.23"
            />
          </mask>
        </defs>

        <g mask="url(#risingMask)">
          <polyline
            className="cls-2"
            points="67.88 338.08 211.18 154.78 274.53 244.49 393.07 78.9"
          />
          <path
            className="cls-4"
            d="M425.32,33.85c-7.31,26.83-12.72,62.74-10.17,89.21l-26.31-38.25-44.68-12.57c25.89-6.13,58.13-22.82,81.17-38.39Z"
          />
        </g>
      </RisingStyle.Svg>
      {children}
    </RisingStyle.Container>
  );
};

export default Rising;
