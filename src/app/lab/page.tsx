import LabTemplate from '@/components/templates/lab';
import createMeta from '@/utils/createMeta';

export const metadata = createMeta({
  title: ' : Lab',
  description: '도입되었거나 도입할 기술들을 실험하는 공간',
});

const Lab = () => {
  return <LabTemplate />;
};

export default Lab;
