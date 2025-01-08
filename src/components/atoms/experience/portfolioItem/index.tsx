import Image from 'next/image';
import PortfolioItemStyle from './portfolioItem.style';
import { Portfolio } from '@/components/organisms/experience/portfolioList';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaPlay } from 'react-icons/fa6';
import { ImBlogger2 } from 'react-icons/im';

interface PortfolioItemProps {
  index: number;
  item: Portfolio;
  updateList: Portfolio[];
  prevList: Portfolio[];
}

const findIndex = (list: Portfolio[], title: string) => {
  return list.findIndex((item) => item.title === title);
};

const Icons = {
  github: FaGithub,
  service: FaPlay,
  blog: ImBlogger2,
};

const PortfolioItem = (props: PortfolioItemProps) => {
  const { index, item, updateList, prevList } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [previewDetail, setPreviewDetail] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [active, setActive] = useState(false);

  const currentIndex = findIndex(updateList, item.title);
  const prevIndex =
    findIndex(prevList, item.title) === -1
      ? index
      : findIndex(prevList, item.title);

  const handleAnimationEnd = () => {
    if (itemRef.current!.classList.contains('close')) {
      setActive(false);
    } else {
      if (detailRef.current) {
        detailRef.current.classList.add('open');
      }
    }
  };

  const handleActive = () => {
    if (active) return;

    setActive(true);
    const { x, y, width, height } = itemRef.current!.getBoundingClientRect();
    setPreviewDetail({ x, y, width, height });
  };

  const handleInactive = () => {
    itemRef.current!.classList.add('close');
  };

  useEffect(() => {
    if (!active) {
      itemRef.current!.classList.remove('close');
    }
  }, [active]);

  useEffect(() => {
    const resizeObserver = () => {
      if (!itemRef.current!.classList.contains('close')) {
        itemRef.current!.classList.add('close');
      }
    };

    resizeObserver();

    window.addEventListener('resize', resizeObserver);

    return () => {
      window.removeEventListener('resize', resizeObserver);
    };
  }, []);

  return (
    <PortfolioItemStyle.Container
      $currentIndex={currentIndex}
      $active={active}
      aria-hidden={currentIndex === -1}
    >
      <h3 className="a11y">{item.title}</h3>
      {active && <PortfolioItemStyle.Overlay onClick={handleInactive} />}
      <PortfolioItemStyle.Preview
        $currentIndex={currentIndex}
        $prevIndex={prevIndex}
        $index={index}
        $active={active}
        $previewDetail={previewDetail}
        ref={itemRef}
        onAnimationEnd={handleAnimationEnd}
      >
        <div>
          <button onClick={handleActive}>
            {!active && (
              <PortfolioItemStyle.PreviewDetails>
                <PortfolioItemStyle.Title>
                  {item.title}
                </PortfolioItemStyle.Title>
                <PortfolioItemStyle.Category>
                  {item.category.join(', ')}
                </PortfolioItemStyle.Category>
              </PortfolioItemStyle.PreviewDetails>
            )}
            <Image src={item.thumbnail} alt={''} width={1232} height={711} />
          </button>

          {active && (
            <PortfolioItemStyle.Detail ref={detailRef}>
              <PortfolioItemStyle.Title>{item.title}</PortfolioItemStyle.Title>
              <PortfolioItemStyle.Category>
                {item.category.join(', ')}
              </PortfolioItemStyle.Category>
              <PortfolioItemStyle.Member>
                {item.member}
              </PortfolioItemStyle.Member>

              <PortfolioItemStyle.ActionLinks>
                {item.links.map(({ link, label }) => {
                  const Icon = Icons[label as keyof typeof Icons];

                  return (
                    <li key={label}>
                      <Link href={link} passHref legacyBehavior>
                        <a target={'_blank'}>
                          <Icon size={30} />
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </PortfolioItemStyle.ActionLinks>

              <PortfolioItemStyle.Description>
                dqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqw
              </PortfolioItemStyle.Description>
            </PortfolioItemStyle.Detail>
          )}
        </div>

        <PortfolioItemStyle.Description>
          dqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqwdqwqdwqwddqw
        </PortfolioItemStyle.Description>
      </PortfolioItemStyle.Preview>
    </PortfolioItemStyle.Container>
  );
};

export default PortfolioItem;
