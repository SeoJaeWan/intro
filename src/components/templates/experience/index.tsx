import CareerList from '@/components/molecules/experience/careerList';
import PortfolioList from '@/components/molecules/experience/portfolioList';

const ExperienceTemplate = () => {
  return (
    <div>
      <h2 className="a11y">Experience</h2>
      <PortfolioList />

      <CareerList />
    </div>
  );
};

export default ExperienceTemplate;
