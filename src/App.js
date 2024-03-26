import './App.css';

export default function Claw() {
  return (
    <div className="main">
      <div className="home">
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
          {/* 
          <span className="main-1">
            불편했던 대학 생활을 클로로 정리하자!<br />
            대학 생활을 더욱 효율적으로 관리하고 싶다면?
          </span> 
          */}
        </div>
      </div>
      <div className="footer">
        <div className="footer-inner">
          <div className="left">
            <div className="header-logo">
              <span className="claw-7">CLAW</span>
            </div>
            <div className="address">
              <span className="main-305">10279 경기도 고양시 덕양구 동헌로 305</span>
            </div>
          </div>
          <div className="top">
            <span className="main-8">문의하기</span>
          </div>
        </div>
        <div className="frame-1149">
          <div className="line-8"></div>
          <span className="copyright">COPYRIGHT ⓒ 2024 CLAW. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </div>
  );
}
