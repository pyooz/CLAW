// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Share from './share';
import Coupon from './coupon';
import Event from './event';
import Schedule from './schedule';
import Login from './login';

export default function App() {
  return (
    <Router>
      <div className="main">
        <div className="home">
          <Header />
          <Routes>
            <Route path="/share" element={<Share />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/event" element={<Event />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <div className="home">
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
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}