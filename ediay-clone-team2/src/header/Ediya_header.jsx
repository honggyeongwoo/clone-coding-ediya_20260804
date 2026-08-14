import React from "react";

import "./Ediya_Header_nav-bar.css";
import "./Ediya_Header_menu-banner.css";
import "./Ediya_Header_menu-header.css";

// import "./Ediya_Header_language.js";

function EdiyaHeader() {
  return (
    // <!-- Header 전체 구역 -->
    <header className="wrap-header">
      {/* <!-- 1구역: 상단 Nav Bar (파란 배경) --> */}
      <div className="nav-bar">
        {/* <!-- 1. 왼쪽: 브랜드/기업/창업/채용 --> */}
        <div className="nav-bar-left">
          {/* <!-- ul-list 형식으로 배치 후 내부 Text는 A 태그로 링크 주기 --> */}
          {/* <!-- 누른 사이트 페이지가 선택되어 있을때는 흰색 배경 색으로 변경되어 시각효과 적용 Class 붙임/때기 --> */}
          <ul>
            <li className="on">
              <a href="https://www.ediya.com/">브랜드 사이트</a>
            </li>
            <li>
              <a href="https://www.ediya.com/C/#c">기업 사이트</a>
            </li>
            <li>
              <a href="https://www.ediya.com/C/contents/franchise_01.html">
                창업안내
              </a>
            </li>
            <li>
              <a href="https://ediya.recruiter.co.kr/appsite/company/index">
                채용안내
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- 오른쪽: 로그인 등 유틸 메뉴/SNS/검색 --> */}
        <div className="nav-bar-right">
          {/* <!-- 로그인 등 유틸 메뉴 --> */}
          <ul className="nav-util">
            <li>
              <a href="https://members.ediya.com/member/login?referer_url=https://www.ediya.com/api/externalLoginRequest.php">
                로그인
              </a>
            </li>
            <li>
              <a href="https://www.ediya.com/contents/find_store.html">
                매장찾기
              </a>
            </li>
            <li>
              <a href="https://members.ediya.com/support/faq">
                고객의 소리
              </a>
            </li>
            <li>
              <a href="https://ediyastore.com/index.html">
                이디야 공식몰
              </a>
            </li>
            <li>
              <a href="https://brand.naver.com/ediyacoffeegift">
                모바일상품권 스토어
              </a>
            </li>
          </ul>

          {/* <!-- SNS 아이콘 영역 --> */}
          <ul className="nav-sns">
            <li>
              <a href="#">
                <img src="./m_top_sns01.gif" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./m_top_sns02.gif" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./m_top_sns03.gif" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./m_top_sns04.gif" alt="" />
              </a>
            </li>
          </ul>

          {/* <!-- 검색 --> */}
          <div className="nav-search">
            <input type="text" placeholder="" />

            <button>
              <a href="">
                <img src="./icon_search.gif" alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- //Nav Bar --> */}

      {/* <!-- 2구역: 로고 + 언어 선택 --> */}
      <div className="menu-banner">
        <div className="banner-left"></div>

        <div className="banner-logo">
          <a href="https://ediya.com/">
            <img
              src="https://ediya.com/images/common/top_logo_240822.gif"
              alt="EDIYA COFFEE"
            />
          </a>
        </div>

        <div className="language-box">
          <a href="" className="language-button">
            <img
              src="https://www.ediya.com/images/common/lang_ko.webp"
              alt=""
            />
            KO
          </a>

          <ul className="language-list">
            <li>
              <a href="">
                <img
                  src="https://www.ediya.com/images/common/lang_ko.webp"
                  alt="한글"
                />
                KO
              </a>
            </li>

            <li>
              <a href="">
                <img
                  src="https://www.ediya.com/images/common/lang_en.webp"
                  alt="영어"
                />
                EN
              </a>
            </li>

            <li>
              <a href="">
                <img
                  src="https://www.ediya.com/images/common/lang_cn.webp"
                  alt="중국어"
                />
                CH
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- //로고 + 언어 --> */}

      {/* <!-- 3구역: 메인 메뉴 (sub 펼쳐진 상태 고정) --> */}
      <div className="menu-header">
        <div className="menu">
          <div className="menu-category">
            <a href="#">원두</a>

            <ul className="sub">
              <li>
                <a href="#">이디야 블렌드</a>
              </li>
              <li>
                <a href="#">품질</a>
              </li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">메뉴</a>

            <ul className="sub">
              <li>
                <a href="#">음료</a>
              </li>
              <li>
                <a href="#">푸드</a>
              </li>
              <li>
                <a href="#">MD</a>
              </li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">유통제품</a>

            <ul className="sub">
              <li>
                <a href="#">스틱커피</a>
              </li>
              <li>
                <a href="#">커피믹스</a>
              </li>
              <li>
                <a href="#">원두커피</a>
              </li>
              <li>
                <a href="#">RTD 커피</a>
              </li>
              <li>
                <a href="#">스틱 음료</a>
              </li>
              <li>
                <a href="#">선물세트</a>
              </li>
              <li>
                <a href="#">수출입거래</a>
              </li>
              <li>
                <a href="#">B2B/특판/대리점 거래</a>
              </li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">이디야멤버스</a>

            <ul className="sub">
              <li>
                <a href="#">멤버십안내</a>
              </li>
              <li>
                <a href="#">서비스안내</a>
              </li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">상품권·제휴카드</a>

            <ul className="sub">
              <li>
                <a href="#">상품권 소개</a>
              </li>
              <li>
                <a href="#">제휴카드(하나·신한)</a>
              </li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">브랜드 소식</a>

            <ul className="sub">
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">이벤트 안내</a>
              </li>
              <li>
                <a href="#">사회공헌 활동</a>
              </li>
            </ul>
          </div>

          <div className="menu-category">
            <a href="#">고객 지원·케이터링</a>

            <ul className="sub">
              <li>
                <a href="#">고객의 소리</a>
              </li>
              <li>
                <a href="#">소비자중심경영(CCM)</a>
              </li>
              <li>
                <a href="#">제휴·제안</a>
              </li>
              <li>
                <a href="#">케이터링·커피트럭</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- //메인 메뉴 --> */}
    </header>
  );
}

export default EdiyaHeader;
