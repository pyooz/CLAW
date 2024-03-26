// Header.js
import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="claw">
        CLAW
      </div>
      <div className="header-menu">
        <div className="menu">
          <span className="main-2">공유</span>
          <span className="main-3">쿠폰</span>
          <span className="main-4">행사</span>
          <span className="main-5">시간표</span>
        </div>
        <div className="login-group">
          <div className="login">
            <span className="main-6">로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
}
