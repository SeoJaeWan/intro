'use client';
import LabStyle from './lab.style';
import data from './lab.json';
import LabItem from '@/components/atoms/lab/labItem';

const { list } = data;

const LabTemplate = () => {
  return (
    <LabStyle.Container>
      <h2 className="a11y">실험실</h2>

      <LabStyle.LabList>
        {list.map((item) => (
          <LabItem {...item} key={item.title} />
        ))}
      </LabStyle.LabList>
    </LabStyle.Container>
  );
};

export default LabTemplate;
