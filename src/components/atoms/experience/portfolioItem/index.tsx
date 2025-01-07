import Image from 'next/image';
import PortfolioItemStyle from './portfolioItem.style';
import { Portfolio } from '@/components/organisms/experience/portfolioList';

interface PortfolioItemProps {
  index: number;
  item: Portfolio;
  updateList: Portfolio[];
  prevList: Portfolio[];
}

const findIndex = (list: Portfolio[], title: string) => {
  return list.findIndex((item) => item.title === title);
};

const PortfolioItem = (props: PortfolioItemProps) => {
  const { index, item, updateList, prevList } = props;

  const currentIndex = findIndex(updateList, item.title);
  const prevIndex =
    findIndex(prevList, item.title) === -1
      ? index
      : findIndex(prevList, item.title);

  return (
    <PortfolioItemStyle.Container
      $currentIndex={currentIndex}
      $prevIndex={prevIndex}
      $index={index}
      aria-hidden={currentIndex === -1}
    >
      <h3 className="a11y">{item.title}</h3>
      <button>
        <PortfolioItemStyle.ThumbnailInfo>
          <PortfolioItemStyle.Title>{item.title}</PortfolioItemStyle.Title>
          <PortfolioItemStyle.Category>
            {item.category.join(', ')}
          </PortfolioItemStyle.Category>
        </PortfolioItemStyle.ThumbnailInfo>
        <Image src={item.thumbnail} alt={''} width={1232} height={711} />
      </button>
    </PortfolioItemStyle.Container>
  );
};

export default PortfolioItem;
