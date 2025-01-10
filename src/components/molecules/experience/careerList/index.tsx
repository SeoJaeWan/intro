'use client';
import Information from '@/components/atoms/common/information';
import CareerListStyle from './careerList.style';
import data from './careerList.json';
import CareerItem from '@/components/atoms/experience/careerItem';

const { list } = data;

export interface Career {
  title: string;
  position: string;
  period: string;
  contents: {
    title?: string;
    stack?: string;
    descriptions: string[];
  }[];
}

const CareerList = () => {
  return (
    <CareerListStyle.Container>
      <CareerListStyle.Title>
        <Information>Career</Information>
      </CareerListStyle.Title>

      <CareerListStyle.ListBox>
        {list.map((career) => (
          <CareerItem key={career.title} career={career} />
        ))}
      </CareerListStyle.ListBox>
    </CareerListStyle.Container>
  );
};

export default CareerList;
