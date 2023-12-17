import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        최현빈의 홈페이지
        <br />
        "가능성 있는 개발자"
      </header>

      <div className="container">
        <nav>
          <Link to={"/introduction"}>나의 소개</Link>
          <Link to={"/project"}>프로젝트</Link>
          <Link to={"/contest"}>공 모 전 </Link>
          <Link to={"/career"}>나의 경력</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/contest" Component={Contest} />
            <Route path="/career" Component={Career} />
          </Routes>
        </main>
      </div>
      <footer>
        <i>
          202035256 최현빈
          <br />
          연락처 : 010-5912-1657
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App;
