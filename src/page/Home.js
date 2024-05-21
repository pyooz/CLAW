import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navgate = useNavigate();

  return (
    <div>
      <button onClick={() => navgate("/study")}>학습</button>
      <button onClick={() => navgate("/mypage")}>마이페이지</button>
    </div>
  );
}

export default Home;
