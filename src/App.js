// App.js
import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

export default function App() {
  return (
    <div className="main">
      <div className="home">
        <Header />
        <div className="center-group">
          <div className="center">
            클로,<br />
            대학생활을 잡다!
          </div>
          <div className="button">
            <div className="button-contained">
              <span className="button-9">클로 시작하기</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
