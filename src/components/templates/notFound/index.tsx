'use client';
import NotFoundStyle from './notFound.style';

const NotFoundTemplate = () => {
  return (
    <NotFoundStyle.Container>
      <NotFoundStyle.ImageBox>
        <NotFoundStyle.FirstTextImage
          src="/assets/images/common/404_1.png"
          alt=""
          width={1000}
          height={1000}
        />
        <NotFoundStyle.EarthImage
          src="/assets/images/common/earth.png"
          alt=""
          width={1000}
          height={1000}
        />
        <NotFoundStyle.LastTextImage
          src="/assets/images/common/404_2.png"
          alt=""
          width={1000}
          height={1000}
        />
      </NotFoundStyle.ImageBox>
      <NotFoundStyle.Title>페이지를 찾을 수 없습니다.</NotFoundStyle.Title>
    </NotFoundStyle.Container>
  );
};

export default NotFoundTemplate;
