import About from '@/components/molecules/home/about';
import Hero from '@/components/molecules/home/hero';
import More from '@/components/organisms/home/more';

const HomeTemplate = () => {
  return (
    <div>
      <Hero />

      <About />

      <More />

      {/* <section>
        <h2>Introduce</h2>

        <article>
          <h3>Develop</h3>
          <p>
            React와 Next.js환경에서 TypeScript를 사용해서 개발하고 있습니다.
            리팩토링과 QA 과정에서 자원 소비를 줄이기 위해 Jest 기반의 테스트
            코드를 효과적으로 활용하는 방법을 고민하고 있습니다.
          </p>
        </article>

        <article>
          <h3>DevOps</h3>
          <p>
            프론트엔드 개발자로서, 보이는 화면만 개발하는 것을 넘어 GitHub
            Actions를 활용한 업무 자동화에 관심을 가지고 시도하며 발전하고
            있습니다.
          </p>
        </article>

        <article>
          <h3>Co-work</h3>
          <p>
            서비스를 성공적으로 완료하기 위해 동료들과의 원활한 소통이
            중요하다고 생각합니다. 갈등을 회피하기 위해 돌려 말하기보다는,
            솔직하면서도 배려 깊은 방식으로 의견 전달을 중요하게 여깁니다.
          </p>
        </article>
      </section> */}
    </div>
  );
};

export default HomeTemplate;
