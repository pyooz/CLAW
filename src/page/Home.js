import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/LearningPage")}>학습</button>
      <button onClick={() => navigate("/mypage")}>마이페이지</button>
    </div>
  );
}

export default Home;
