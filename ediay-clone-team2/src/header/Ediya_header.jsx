// Ediya_header.jsx

import React from "react";

import "./Ediya_Header_nav-bar.css";
import "./Ediya_Header_menu-banner.css";
import "./Ediya_Header_menu-header.css";

// 🟩 [추가] 일반 JS 실행 파일이 아니라 React custom hook으로 연결
import useEdiyaHeader from "./Ediya_Header_language.js";

function EdiyaHeader() {
  // 🟩 [추가] JS 파일에서 state와 click 함수를 받아 사용
  const {
    isLanguageOpen,
    activeNav,
    isMobileMenuOpen,
    handleLanguageClick,
    handleNavClick,
    handleMobileMenuClick,
    handleHeaderClick,
  } = useEdiyaHeader();

  const topNavItems = ["브랜드 사이트", "기업 사이트", "창업안내", "채용안내"];

  return (
    // 🟩 [추가] 모든 # 링크의 기본 이동을 header 한 곳에서 차단
    <header className="wrap-header" onClick={handleHeaderClick}>
      {/* 1구역: 상단 Nav Bar */}
      <div className="nav-bar">
        <nav className="nav-bar-left" aria-label="상단 사이트 메뉴">
          <ul>
            {topNavItems.map((item, index) => (
              <li key={item} className={activeNav === index ? "on" : ""}>
                {/* 🟨 [수정] 모든 href를 #으로 통일 */}
                <a href="#" onClick={(event) => handleNavClick(event, index)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-bar-right">
          <ul className="nav-util">
            <li><a href="#">로그인</a></li>
            <li><a href="#">매장찾기</a></li>
            <li><a href="#">고객의 소리</a></li>
            <li><a href="#">이디야 공식몰</a></li>
            <li><a href="#">모바일상품권 스토어</a></li>
          </ul>

          <ul className="nav-sns">
            <li><a href="#"><img src="./m_top_sns01.gif" alt="블로그" /></a></li>
            <li><a href="#"><img src="./m_top_sns02.gif" alt="인스타그램" /></a></li>
            <li><a href="#"><img src="./m_top_sns03.gif" alt="페이스북" /></a></li>
            <li><a href="#"><img src="./m_top_sns04.gif" alt="유튜브" /></a></li>
          </ul>

          <form className="nav-search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="header-search" className="sr-only">검색</label>
            <input id="header-search" type="text" />
            {/* 🟨 [수정] button 안의 a 제거: 중첩 클릭 요소 오류 방지 */}
            <button type="submit" aria-label="검색">
              <img src="./icon_search.gif" alt="" />
            </button>
          </form>
        </div>
      </div>

      {/* 2구역: 로고 + 언어 선택 */}
      <div className="menu-banner">
        <div className="banner-left">
          {/* 🟩 [추가] 768px 이하에서 표시되는 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={handleMobileMenuClick}
            aria-label="전체 메뉴 열기"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        <div className="banner-logo">
          {/* 🟨 [수정] 실제 이동을 막기 위해 href를 #으로 변경 */}
          <a href="#">
            <img
              src="https://ediya.com/images/common/top_logo_240822.gif"
              alt="EDIYA COFFEE"
            />
          </a>
        </div>

        {/* 🟨 [수정] React state에 따라 open 클래스 적용 */}
        <div className={`language-box ${isLanguageOpen ? "open" : ""}`}>
          <a
            href="#"
            className="language-button"
            onClick={handleLanguageClick}
            aria-expanded={isLanguageOpen}
          >
            <img src="https://www.ediya.com/images/common/lang_ko.webp" alt="한국어" />
            KO
          </a>

          <ul className="language-list">
            <li><a href="#"><img src="https://www.ediya.com/images/common/lang_ko.webp" alt="한국어" />KO</a></li>
            <li><a href="#"><img src="https://www.ediya.com/images/common/lang_en.webp" alt="영어" />EN</a></li>
            <li><a href="#"><img src="https://www.ediya.com/images/common/lang_cn.webp" alt="중국어" />CH</a></li>
          </ul>
        </div>
      </div>

      {/* 3구역: 메인 메뉴 */}
      {/* 🟨 [수정] 모바일 state에 따라 open 클래스 적용 */}
      <nav
        className={`menu-header ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="메인 메뉴"
      >
        <div className="menu">
          <div className="menu-category">
            <a href="#">원두</a>
            <ul className="sub">
              <li><a href="#">이디야 블렌드</a></li>
              <li><a href="#">품질</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">메뉴</a>
            <ul className="sub">
              <li><a href="#">음료</a></li>
              <li><a href="#">푸드</a></li>
              <li><a href="#">MD</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">유통제품</a>
            <ul className="sub">
              <li><a href="#">스틱커피</a></li>
              <li><a href="#">커피믹스</a></li>
              <li><a href="#">원두커피</a></li>
              <li><a href="#">RTD 커피</a></li>
              <li><a href="#">스틱 음료</a></li>
              <li><a href="#">선물세트</a></li>
              <li><a href="#">수출입거래</a></li>
              <li><a href="#">B2B/특판/대리점 거래</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">이디야멤버스</a>
            <ul className="sub">
              <li><a href="#">멤버십안내</a></li>
              <li><a href="#">서비스안내</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">상품권·제휴카드</a>
            <ul className="sub">
              <li><a href="#">상품권 소개</a></li>
              <li><a href="#">제휴카드(하나·신한)</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">브랜드 소식</a>
            <ul className="sub">
              <li><a href="#">공지사항</a></li>
              <li><a href="#">이벤트 안내</a></li>
              <li><a href="#">사회공헌 활동</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">고객 지원·케이터링</a>
            <ul className="sub">
              <li><a href="#">고객의 소리</a></li>
              <li><a href="#">소비자중심경영(CCM)</a></li>
              <li><a href="#">제휴·제안</a></li>
              <li><a href="#">케이터링·커피트럭</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default EdiyaHeader;