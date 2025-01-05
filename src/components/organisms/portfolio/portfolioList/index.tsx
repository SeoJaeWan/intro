'use client';
import Information from '@/components/atoms/common/information';
import PortfolioListStyle from './portfolioList.style';
import { list } from './portfolioList.json';
import { useState } from 'react';
import PortfolioItem from '@/components/atoms/portfolio/portfolioItem';

const categories = Array.from(
  new Set(list.reduce((acc, cur) => acc.concat(cur.category), [] as string[])),
);

export interface Portfolio {
  id: number;
  thumbnail: string;
  category: string[];
  title: string;
}

const getRenderList = (categories: string[]) => {
  return list.filter((item) =>
    categories.length === 0
      ? true
      : categories.some((category) => item.category.includes(category)),
  );
};

const PortfolioList = () => {
  const [selectCategories, setSelectCategories] = useState<string[]>([]);
  const [updateList, setUpdateList] = useState<Portfolio[]>(
    getRenderList(selectCategories),
  );
  const [prevList, setPrevList] = useState<Portfolio[]>(
    getRenderList(selectCategories),
  );

  const handleSelectCategory = (category: string) => {
    let updateCategories = [];

    if (selectCategories.includes(category)) {
      updateCategories = selectCategories.filter((item) => item !== category);

      setSelectCategories(updateCategories);
    } else {
      updateCategories = [...selectCategories, category];

      setSelectCategories(updateCategories);
    }

    const updateList = getRenderList(updateCategories);
    const prevList = getRenderList(selectCategories);

    setPrevList(prevList);
    setUpdateList(updateList);
  };

  return (
    <PortfolioListStyle.Container>
      <PortfolioListStyle.Title>
        <Information>PORTFOLIO</Information>
      </PortfolioListStyle.Title>

      <PortfolioListStyle.CategoryList>
        {categories.map((category, index) => (
          <li key={index}>
            <PortfolioListStyle.CategoryButton
              $active={selectCategories.includes(category)}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </PortfolioListStyle.CategoryButton>
          </li>
        ))}
      </PortfolioListStyle.CategoryList>

      <PortfolioListStyle.ThumbnailList>
        {list.map((item, index) => (
          <PortfolioItem
            key={item.id}
            index={index}
            item={item}
            updateList={updateList}
            prevList={prevList}
          />
        ))}
      </PortfolioListStyle.ThumbnailList>
    </PortfolioListStyle.Container>
  );
};

export default PortfolioList;
