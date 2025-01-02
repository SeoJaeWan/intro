import About from '@/components/molecules/home/about';
import Hero from '@/components/molecules/home/hero';
import Introduce from '@/components/molecules/home/introduce';
import More from '@/components/organisms/home/more';

const HomeTemplate = () => {
  return (
    <div>
      <Hero />
      <About />
      <More />
      <Introduce />
    </div>
  );
};

export default HomeTemplate;
