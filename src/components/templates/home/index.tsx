import About from '@/components/molecules/home/about';
import Hero from '@/components/molecules/home/hero';

const HomeTemplate = () => {
  return (
    <div>
      <Hero />

      <About />

      <section>
        <h2>More SEOJAEWAN</h2>

        <article>
          <h3>Skill</h3>

          <p>
            낯선 기능에 설렘을 가지며 React와 Next.js 환경에서 즐거운 개발을
            하고 있습니다. <br />
            개발자가 편환 환경에서 개발을 할 수 있을지 즐거운 고민을 하고
            있습니다.
          </p>
        </article>

        <article>
          <h3>Communication</h3>

          <p>
            좋은 서비스를 완성하기 위해서는 팀원과의 소통과 협업이 중요하다고
            생각해요. 혼자 앞서나가는 것이 아닌 전체의 전투력 상승에 관심이
            많습니다.
          </p>
        </article>

        <article>
          <h3>Job</h3>

          <p>
            개발 말고도 해외(일본)여행, 평생을 함께할 취미를 찾기 위해서 즐거운
            여정을 하고 있습니다.
          </p>
        </article>
      </section>

      <section>
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
      </section>
    </div>
  );
};

export default HomeTemplate;
