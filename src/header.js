// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

export default function Header() {
  return (
    <div className="header">
      <div className="claw">
        CLAW
      </div>
      <div className="header-menu">
        <div className="menu">
          <Link to="/share" className="main-2">공유</Link>
          <Link to="/coupon" className="main-3">쿠폰</Link>
          <Link to="/event" className="main-4">행사</Link>
          <Link to="/schedule" className="main-5">시간표</Link>
        </div>
        <div className="login-group">
          <Link to="/login" className="login main-6">로그인</Link>
        </div>
      </div>
    </div>
  );
}
