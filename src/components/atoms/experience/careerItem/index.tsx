import { Career } from '@/components/molecules/experience/careerList';
import CareerItemStyle from './careerItem.style';
import useObserver from '@/hooks/useObserver';

interface CareerItemProps {
  career: Career;
}

const CareerItem = (props: CareerItemProps) => {
  const { career } = props;
  const itemRef = useObserver<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <CareerItemStyle.Container ref={itemRef}>
      <CareerItemStyle.Indicator />
      <CareerItemStyle.Title>{career.title}</CareerItemStyle.Title>
      <CareerItemStyle.PositionAndPeriod>
        {career.position}
      </CareerItemStyle.PositionAndPeriod>
      <CareerItemStyle.PositionAndPeriod>
        {career.period}
      </CareerItemStyle.PositionAndPeriod>

      <CareerItemStyle.ContentsList>
        {career.contents.map((content, idx) => (
          <CareerItemStyle.ContentItem key={idx} $delay={0.3 * (idx + 1)}>
            {content.title && <h4>{content.title}</h4>}
            {content.stack && <p>{content.stack}</p>}

            <ul>
              {content.descriptions.map((desc, idx) => (
                <li
                  key={idx}
                  dangerouslySetInnerHTML={{
                    __html: desc,
                  }}
                ></li>
              ))}
            </ul>
          </CareerItemStyle.ContentItem>
        ))}
      </CareerItemStyle.ContentsList>
    </CareerItemStyle.Container>
  );
};

export default CareerItem;
