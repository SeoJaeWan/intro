import HomeTemplate from '@/components/templates/home';
import createMeta from '@/utils/createMeta';

export const metadata = createMeta({
  title: ' : 서재완',
  description: '업데이트 되는 프론트엔드 개발자.',
});

const Home = () => {
  return <HomeTemplate />;
};

export default Home;
