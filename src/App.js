import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Mypage from "./page/Mypage";
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
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;