import "../CSS/Contest.css";

const Contest1 = () => {
  return (
    <div>
      <h1>2023 대한민국 아이디어 공모전</h1>
      <img src="/image/contest1.png" alt="react" />
      <fieldset>
        <legend>공모전 개요</legend>
        <ul>
          <li>저출산 대응 아이디어 제시</li>
          <li>안정적인 노인 돌봄 서비스를 공급할 수 있는 아이디어 제시</li>
          <li>고령층·여성·외국인 등 경제활동 참여를 활성화할 수 있는 아이디어 제시</li>
          <li>학령인구 감소와 지방소멸에 대응할 수 있는 아이디어 제시</li>
          <li>이 중 저출산 대응 관련 아이디어 제시에 참여</li>
        </ul>
        현재 시행되고 있는 여러 저출산 대응 정책들 대신,<br />
        아이 한 명 당 대학까지의 학비 절감 및 현재 제공되는 신혼 임대 주택의 아이 한 명당 기간 증대 및
        현재 많은 논란이 되고있는 젠더 갈등, 양육 환경 등에 대한 대책을 마련해 내놓음
        비록 선정은 되지 못했지만 저출산 문제에 대한 고민을 <br />
        해볼 수 있는 좋은 기회였다고 생각함.
      </fieldset>
    </div>
  );
};

export default Contest1;