import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MyPage from "./page/Mypage";
import LearningPage from "./page/LearningPage";
// import ConsonantList from "./page/ConsonantList";
// import ConsonantButton from "./page/ConsonantButton";
import Nav from "./page/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/learningpage" element={<LearningPage />} />
          <Route path="/Mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;