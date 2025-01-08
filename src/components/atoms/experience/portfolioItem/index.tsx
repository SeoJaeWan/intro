import Image from 'next/image';
import PortfolioItemStyle from './portfolioItem.style';
import { Portfolio } from '@/components/organisms/experience/portfolioList';
import { useRef, useState } from 'react';
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
  const [thumbnailInfo, setThumbnailInfo] = useState({
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
      itemRef.current!.classList.remove('close');
    }
  };

  const handleActive = () => {
    setActive(true);
    if (itemRef.current) {
      const { x, y, width, height } = itemRef.current.getBoundingClientRect();
      setThumbnailInfo({ x, y, width, height });
    }
  };

  const handleInactive = () => {
    if (itemRef.current) itemRef.current.classList.add('close');
  };

  return (
    <PortfolioItemStyle.Container
      $currentIndex={currentIndex}
      $active={active}
      aria-hidden={currentIndex === -1}
    >
      <h3 className="a11y">{item.title}</h3>
      {active && <PortfolioItemStyle.Shadow onClick={handleInactive} />}
      <PortfolioItemStyle.Thumbnail
        $currentIndex={currentIndex}
        $prevIndex={prevIndex}
        $index={index}
        $active={active}
        $thumbnailInfo={thumbnailInfo}
        ref={itemRef}
        onAnimationEnd={handleAnimationEnd}
      >
        <div>
          <button onClick={handleActive}>
            {!active && (
              <PortfolioItemStyle.ThumbnailInfo>
                <PortfolioItemStyle.Title>
                  {item.title}
                </PortfolioItemStyle.Title>
                <PortfolioItemStyle.Category>
                  {item.category.join(', ')}
                </PortfolioItemStyle.Category>
              </PortfolioItemStyle.ThumbnailInfo>
            )}
            <Image src={item.thumbnail} alt={''} width={1232} height={711} />
          </button>

          {active && (
            <PortfolioItemStyle.DetailInfo>
              <PortfolioItemStyle.Title>{item.title}</PortfolioItemStyle.Title>
              <PortfolioItemStyle.Category>
                {item.category.join(', ')}
              </PortfolioItemStyle.Category>
              <PortfolioItemStyle.Member>
                {item.member}
              </PortfolioItemStyle.Member>

              <PortfolioItemStyle.OtherLinkList>
                {item.links.map(({ link, label }) => {
                  const Icon = Icons[label as keyof typeof Icons];

                  return (
                    <li key={label}>
                      <Link href={link} passHref legacyBehavior>
                        <a target={'_blank'}>
                          <Icon size={35} />
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </PortfolioItemStyle.OtherLinkList>
            </PortfolioItemStyle.DetailInfo>
          )}
        </div>
        <PortfolioItemStyle.Description>
          dqwqdwqwddqw
        </PortfolioItemStyle.Description>
      </PortfolioItemStyle.Thumbnail>
    </PortfolioItemStyle.Container>
  );
};

export default PortfolioItem;
