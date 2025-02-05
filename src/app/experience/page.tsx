import ExperienceTemplate from '@/components/templates/experience';
import createMeta from '@/utils/createMeta';

export const metadata = createMeta({
  title: ' : Experience',
  description: '지금까지 개발자로 걸어온 경험',
});

const Experience = () => {
  return <ExperienceTemplate />;
};

export default Experience;
