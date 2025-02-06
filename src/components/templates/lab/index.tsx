'use client';
import LabStyle from './lab.style';
import data from './lab.json';
import LabItem from '@/components/atoms/lab/labItem';
import useAnimation from '@/store/animation';

const { list } = data;

const LabTemplate = () => {
  const { isRootAnimation } = useAnimation();

  return (
    <LabStyle.Container>
      <h2 className="a11y">Lab</h2>

      <LabStyle.LabList>
        {isRootAnimation &&
          list.map((item, index) => (
            <LabItem {...item} key={item.title} index={index} />
          ))}
      </LabStyle.LabList>
    </LabStyle.Container>
  );
};

export default LabTemplate;
